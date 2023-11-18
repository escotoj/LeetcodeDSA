var maxProfit = function(prices) {
    if (prices.length < 2) {
      // Not enough prices to make a profit
      return 0;
    }
  
    let minPrice = prices[0]; // Initialize the minimum price to the first element
    let maxProfit = 0; // Initialize the maximum profit to 0
  
    for (let i = 1; i < prices.length; i++) {
      // Update the minimum price if the current price is lower
      minPrice = Math.min(minPrice, prices[i]);
  
      // Update the maximum profit if selling at the current price gives a better profit
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  
    return maxProfit;
  };
  
  // Example usage:
  const stockPrices = [7, 1, 5, 3, 6, 4];
  const result = maxProfit(stockPrices);
  console.log(result); // Output: 5 (buy at 1 and sell at 6 for a profit of 6 - 1 = 5)
  