# Payment Amount Format Handling Guide

## Overview
Different payment providers handle amounts in different formats. This document explains how each provider expects amounts and how our system handles them.

## Database Storage
- Plan prices are stored as **integers** in the database: `5555` (not `5555.00`)
- This represents the amount in som (Uzbek currency)

## Payment Provider Formats

### 1. Click Payment
**Format:** Decimal (but validated as integer)
- Click sends: `5555.00` (decimal)
- Our validation: `parseInt("5555.00") === parseInt("5555")` ✅
- Code location: `src/modules/payment-providers/click/click.service.ts`

```typescript
// Click da summa integer bo'lishi kerak (5555), Payme da decimal (5555.00)
if (parseInt(`${amount}`) !== parseInt(`${plan.price}`)) {
  // Error handling
}
```

### 2. Click Onetime Payment  
**Format:** Decimal (but validated as integer)
- Same as main Click service
- Code location: `src/modules/payment-providers/click-onetime/click-onetime.service.ts`

```typescript
if (parseInt(`${amount}`) !== parseInt(`${plan.price}`)) {
  // Error handling
}
```

### 3. Payme Payment
**Format:** Tiyns (1/100 of som)
- Payme sends: `555500` (in tiyns, represents 5555.00 som)
- Our validation: `555500 / 100 === 5555` ✅
- Code location: `src/modules/payment-providers/payme/payme.service.ts`

```typescript
// Payme da summa tiynlarda keladi (555500 = 5555.00 som)
// Plan narxi integer sifatida saqlangan (5555)
const amountInSom = params.amount / 100;
if (amountInSom !== plan.price) {
  // Error handling
}
```

## Examples

For a plan with price `5555` som:

| Provider | Incoming Amount | Validation Logic | Result |
|----------|----------------|------------------|---------|
| Click | `5555.00` | `parseInt("5555.00") === parseInt("5555")` | ✅ Valid |
| Click Onetime | `5555.00` | `parseInt("5555.00") === parseInt("5555")` | ✅ Valid |
| Payme | `555500` | `555500 / 100 === 5555` | ✅ Valid |

## Implementation Notes

1. **Click Services**: Use `parseInt()` to compare amounts as integers
2. **Payme Service**: Divide incoming amount by 100 to convert from tiyns to som
3. **Database**: Plan prices stored as integers (som)
4. **Logging**: All validation includes detailed amount logging for debugging

## Troubleshooting

### Common Issues
1. **Wrong amount format**: Check if the payment provider is sending the expected format
2. **Database precision**: Ensure plan prices are stored as integers, not decimals
3. **Conversion errors**: Verify the division by 100 for Payme amounts

### Debugging
Each service logs detailed amount information:
```typescript
logger.warn('❌ Invalid amount in Payme', {
  expectedPlanPrice: plan.price,
  receivedAmountInSom: amountInSom,
  receivedAmountInTiyns: params.amount,
});
```

## Testing
To test amount validation:
1. Create a test transaction with the correct plan price
2. Verify each payment provider accepts the amount
3. Check logs for any validation warnings
