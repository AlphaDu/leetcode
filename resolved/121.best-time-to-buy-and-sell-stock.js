/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0
    let beforeMin = Number.MAX_SAFE_INTEGER
    let profit = -prices[0]
    prices.forEach(num => {
        if (num < beforeMin) {
            beforeMin = num
        }
        profit = Math.max(profit, num - beforeMin)
    })
    return profit
};
