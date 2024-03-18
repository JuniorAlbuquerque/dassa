export const formatCurrency = (value: number, type?: string) => {
  if (!value) return "R$ 0";

  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  if (type === "withdraw" && value !== 0) {
    return `- ${currency}`;
  }

  return currency;
};
