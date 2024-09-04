function maxProfit(prices) {
  let res = 0;
  let lowest = prices[0];

  for (let price of prices) {
    lowest = Math.min(lowest, price);
    res = Math.max(res, price - lowest);
  }
  return res;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
