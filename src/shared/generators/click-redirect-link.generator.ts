import { config } from '../config';
import { buildMaskedPaymentLink } from '../utils/payment-link.util';
import { createSignedToken } from '../utils/signed-token.util';

export type ClickRedirectParams = {
  amount: number;
  planId: string;
  userId: string;
};

// Click yangi API URL'lari
const CLICK_PAY_URL = 'https://my.click.uz/services/pay';
const BOT_URL = 'https://t.me/gbclilBot';

function buildMerchantTransactionId(params: ClickRedirectParams): string {
  // Unique transaction ID - timestamp + user + plan
  const timestamp = Date.now();
  return `${timestamp}_${params.userId.substring(0, 8)}_${params.planId.substring(0, 8)}`;
}

export function buildClickProviderUrl(params: ClickRedirectParams): string {
  const serviceId = config.CLICK_SERVICE_ID;
  const merchantId = config.CLICK_MERCHANT_ID;
  const merchantUserId = config.CLICK_MERCHANT_USER_ID;

  if (!serviceId || !merchantId || !merchantUserId) {
    throw new Error('Click configuration is incomplete');
  }

  const merchantTransId = buildMerchantTransactionId(params);

  // Click yangi format
  const urlParams = new URLSearchParams({
    service_id: serviceId,
    merchant_id: merchantId,
    merchant_user_id: merchantUserId,
    amount: params.amount.toString(),
    transaction_param: merchantTransId,
    return_url: BOT_URL,
  });

  return `${CLICK_PAY_URL}?${urlParams.toString()}`;
}

export function getClickRedirectLink(params: ClickRedirectParams) {
  // Har doim to'g'ridan-to'g'ri Click URL ni qaytarish
  return buildClickProviderUrl(params);
}
