const cost = [10, 15, 20]

/**
 * @param {number[]} cost
 * @return {number}
 */

const costToStep = costArr => stepIndex => costArr[stepIndex]

const createMemoContext = () => {
    let cache = {}
    const apply = func => {
        return (...args) => {
            const key = JSON.stringify(args)
            if (cache[key]) {
                return cache[key]
            } else {
                const result = func(...args)
                cache[key] = result
                return result
            }
        }
    }
    apply.flush = () => {
        cache = {}
    }
    return apply
}

const useCache = createMemoContext()

var minCostClimbingStairs = function(costArr) {

    const getCostByStep = costToStep(costArr)
    const getMinCost = (stepIndex) => {
        if (stepIndex < 0) {
            return 0
        }

        return Math.min(
            useCache(getMinCost)(stepIndex - 1) + getCostByStep(stepIndex),
            useCache(getMinCost)(stepIndex - 2) + getCostByStep(stepIndex)
        )
    }    
    return Math.min(
        useCache(getMinCost)(costArr.length - 1),
        useCache(getMinCost)(costArr.length - 2)
    )
}


console.log(minCostClimbingStairs([10, 15, 20]))
useCache.flush()
console.log(minCostClimbingStairs([0,0,0,0]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
