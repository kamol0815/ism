import { Context } from 'grammy';
import { config } from '../config';

export function isAdmin(ctx: Context): boolean {
    if (!ctx.from?.id) return false;

    const adminIds = config.ADMIN_TELEGRAM_IDS
        .split(',')
        .map((id) => id.trim())
        .filter((id) => id.length > 0);

    return adminIds.includes(ctx.from.id.toString());
}

export async function requireAdmin(ctx: Context): Promise<boolean> {
    if (!isAdmin(ctx)) {
        await ctx.reply('❌ Bu komanda faqat adminlar uchun!');
        return false;
    }
    return true;
}
