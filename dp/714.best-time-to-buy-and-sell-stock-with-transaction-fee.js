/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const buy = price => - price - fee
    const sell = price => price - fee

    const buyInday = (dayIndex, currentProfit) => buy(prices[dayIndex]) + currentProfit
    const sellInday = (dayIndex, currentProfit) => sell(prices[dayIndex]) + currentProfit
    const doNothingInDay = (dayIndex, currentProfit) => currentProfit
    const getBestProfit = (dayIndex, currentProfit, needbuy) =>  {
        if (dayIndex === 0 && needbuy) {
            return buy(dayIndex - 0)
        }
        if (hasStock) {
            Math.max(
                getBestProfit()
            )
        } else {

        }
    }
};

maxProfit([1, 3, 2, 8, 4, 9])