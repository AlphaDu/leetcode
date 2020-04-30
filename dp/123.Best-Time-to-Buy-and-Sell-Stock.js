const price = [1, 5, 2, 8, 3, 10]
function maxProfit(prices) {
  const tradeType = {
    buy: 1,
    sell: -1,
    nothing: 0
  }

  const tradeStatus = {
    hasStock: true,
    noStock: false
  }
  const doTradeForMax = (dayIndex, status, remainCount) => {
    const dayProfit = prices[dayIndex]
    if (status === tradeStatus.hasStock) {
      if (remainCount === 0) {
        doTradeIndayIndex(prices.length - 1, tradeStatus.hasStock, remainCount + 1),
      } else {
        return Math.max(
          doTradeIndayIndex(prices.length - 1, tradeStatus.hasStock, remainCount),
          doTradeForMax(prices.length - 1, tradeStatus.hasStock, remainCount + 1) + dayProfit
        )
      }
    } else {
      if (remainCount === 0) {
        return Math.max(
          doTradeForMax(prices.length - 1, tradeStatus.noStock)
        )
      } else {
        return Math.max(
          doTradeForMax(prices.length - 1, tradeStatus.noStock)

        )
      }
    }
  }
  const getMax = Max.max(
    doTradeForMax(prices.length, tradeStatus.noStock, 0),
    doTradeForMax(prices.length, tradeStatus.noStock, 1),
    doTradeForMax(prices.length, tradeStatus.noStock, 2),
  )
  const doTradeIndayIndex = (dayIndex, type, status) => {

  }
}

function t2(price) {
  const tradeCount = 2
  const dp = Array(price.length).fill(Array(tradeCount).fill(0))
}
