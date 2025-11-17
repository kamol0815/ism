import { Injectable } from '@nestjs/common';
import axios from 'axios';
import logger from '../../../shared/utils/logger';

export interface NameMeaning {
  meaning?: string;
  error?: string;
}

export interface GeneratedName {
  name: string;
  meaning: string;
  gender?: string;
  origin?: string;
}

@Injectable()
export class NameMeaningService {
  private readonly apiBaseUrl = 'http://94.158.53.20:8080/names_content.php';
  private readonly generateApiUrl = 'http://94.158.53.20:8080/generate_names.php';

  async getNameMeaning(name: string): Promise<NameMeaning> {
    try {
      const response = await axios.get(this.apiBaseUrl, {
        params: {
          lang_id: 1,
          name: name.trim(),
        },
        timeout: 10000, // 10 second timeout
      });

      if (
        response.data &&
        typeof response.data === 'string' &&
        response.data.trim()
      ) {
        return { meaning: response.data.trim() };
      } else {
        return { error: "Bu ism haqida ma'lumot topilmadi." };
      }
    } catch (error) {
      logger.error('Name meaning API error:', error);
      return {
        error:
          "Ism manosi olishda xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.",
      };
    }
  }

  isValidName(name: string): boolean {
    // Check if name contains only letters and spaces, and is not empty
    const nameRegex = /^[a-zA-ZА-Яа-яЁёўўҳҳғғқққ\s]+$/u;
    return (
      nameRegex.test(name.trim()) &&
      name.trim().length > 0 &&
      name.trim().length <= 50
    );
  }

  formatNameMeaning(name: string, meaning: string): string {
    return `🌟 <b>${name}</b> ismining ma'nosi:\n\n${meaning}\n\nIsmlar manosi botidan foydalanishda davom eting.`;
  }

  /**
   * Ota-ona ismlari va qadriyatlar asosida yangi ismlar generatsiya qilish
   */
  async generatePersonalizedNames(params: {
    gender?: 'boy' | 'girl' | 'all';
    parentNames?: string[];
    focusValues?: string[];
    limit?: number;
  }): Promise<GeneratedName[]> {
    try {
      const response = await axios.post(this.generateApiUrl, {
        gender: params.gender ?? 'all',
        parent_names: params.parentNames ?? [],
        focus_values: params.focusValues ?? [],
        limit: params.limit ?? 5,
        random_seed: Date.now(), // Har safar yangi natija
      }, {
        timeout: 15000,
      });

      if (response.data && Array.isArray(response.data.names)) {
        return response.data.names.map((item: any) => ({
          name: item.name,
          meaning: item.meaning,
          gender: item.gender,
          origin: item.origin,
        }));
      }

      logger.warn('Generate API returned unexpected format');
      return [];
    } catch (error) {
      logger.error('Name generation API error:', error);

      // Fallback: API ishlamasa, ba'zi default ismlar qaytarish
      return this.getFallbackNames(params.gender);
    }
  }

  /**
   * API ishlamasa, fallback ismlar
   */
  private getFallbackNames(gender?: 'boy' | 'girl' | 'all'): GeneratedName[] {
    const boyNames = [
      { name: 'Azizbek', meaning: "Aziz va hurmatli", gender: 'boy', origin: 'O\'zbek' },
      { name: 'Jahongir', meaning: 'Dunyo egasi', gender: 'boy', origin: 'Fors' },
      { name: 'Sarvar', meaning: 'Boshliq, rahbar', gender: 'boy', origin: 'Fors' },
    ];

    const girlNames = [
      { name: 'Madina', meaning: "Shahar nomi, nur shahri", gender: 'girl', origin: 'Arab' },
      { name: 'Dilnoza', meaning: 'Dilrabo, go\'zal', gender: 'girl', origin: 'Fors' },
      { name: 'Sayyora', meaning: 'Sayohatchi, yulduz', gender: 'girl', origin: 'Arab' },
    ];

    if (gender === 'boy') return boyNames;
    if (gender === 'girl') return girlNames;
    return [...boyNames, ...girlNames].sort(() => Math.random() - 0.5).slice(0, 5);
  }
}
