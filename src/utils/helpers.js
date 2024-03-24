export const formatCurrency = (value, currency) =>
  new Intl.NumberFormat().format(value) + ` ${currency} `;
