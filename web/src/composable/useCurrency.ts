export const useCurrencyToUS = (value: number | string | undefined | null): string => {
  if (!value || (typeof value === 'string' && value.trim().length === 0)) return '';

  const cleanedValue = String(value).replace(/[^\d.]/g, '');

  const numberValue = parseFloat(cleanedValue);

  if (!isNaN(numberValue)) {
    return numberValue.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
  }

  return '';
};
