/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  const hasCooldown = dayIndex => false
  const hasStock = dayIndex => false
  const buyInday = dayIndex => false
  const sellInDay = dayIndex => false
  const dp = (dayIndex) => {
      if (hasCooldown(dayIndex)) {
        return dp(dayIndex - 1)
      } else {
        if (hasStock(dayIndex)) {
          return Math.max(
            dp(dayIndex - 1) + sellInDay(dayIndex)
          )
        } else {

        }
      }
  }

};


console.log(maxProfit([1,2,3,0,2]))
