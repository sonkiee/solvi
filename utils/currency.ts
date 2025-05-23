export const currency = (
  amount: number,
  locale = "en-NG",
  currency = "NGN",
  options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: options.minimumFractionDigits || 2,
    maximumFractionDigits: options.maximumFractionDigits || 2,
  }).format(amount || 0);
};

export const formatCurrency = (value: number, currency: { symbol: string }) => {
  return `${currency.symbol}${value.toFixed(2)}`;
};
