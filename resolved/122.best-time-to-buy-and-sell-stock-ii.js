// Say you have an array for which the ith element is the price of a given stock on day i.
//
//     Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sumProfit = 0
    let buyIndex = -1

    for (let i = 0; i < prices.length; i ++) {
        if (prices[i] < prices[i + 1] && buyIndex === -1) {
            buyIndex = i
            continue
        }

        if ((prices[i] > prices[i + 1] || i === prices.length - 1)&& buyIndex !== -1) {
            sumProfit = prices[i] - prices[buyIndex] + sumProfit
            buyIndex = -1
        }
    }

    return sumProfit
};
maxProfit([1,2,3,4,5])
