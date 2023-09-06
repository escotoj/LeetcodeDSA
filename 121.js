// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const prices = [7,1,5,3,6,4]; 

// function maxProfit (prices) {
//     let maximumGain = 0
//     let minimalGain = prices[0]
//     for (let i = 0; i < prices.length; i++) {
//         if(prices[i] < minimalGain) {
//             minimalGain = prices[i];
//         } else if (maximumGain < prices[i] - minimalGain) {
//             maximumGain = prices[i]
//         }
        
//     }
//     return maximumGain;
// }

// console.log(maxProfit(prices))

// 09/05 - structure was right but if statements were incorrect order
// ================================================
// ================================================

// declare the function, and pass the nums parameter
// initiate bestProfit variable by having it equal 0 as a form of Storage for later use.
// initiate minProfit variable by having it equal to the first number in nums like nums[0].
// being a for-loop to iterate through each number. 
// inside this for-loop we have conditional statements where set that if nums[0] is less than minProfit, we have minprofit equal that number as an update.
// we set up a second condition using an else if, so that it only checks one condition at a time
// in the second condition we set it so that if bestProfit is less than nums[i] - minprofit, we set bestprofit to equal that price[i]
// return the bestprofit

const maxProfit = function (prices) {
    let bestProfit = 0;
    let littleProfit = prices[0];
    for (let i = 0; i < prices.length; i++) {
    if (prices[i] < littleProfit) {
        littleProfit = prices[i];
    } else if (bestProfit < prices[i] - littleProfit) {
        bestProfit = prices[i]
    }   
    }
    return bestProfit
}

console.log(maxProfit(prices))

// 09/06 - wrote it out in english first and in JS for the right answer first try. 
// ================================================================================================
// ================================================================================================