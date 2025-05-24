export const getPriceArray = (min, max, step) => {
  const prices = [];
  for (let price = min; price <= max; price += step) prices.push(price);
  return prices;
};
