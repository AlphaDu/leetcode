/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
    let leftIndex = 0
    let rightIndex = heights.length - 1
    let max = 0

    while (leftIndex < rightIndex) {
        const left = heights[leftIndex]
        const right = heights[rightIndex]
        const qua = Math.min(left, right) * (rightIndex - leftIndex)
        if (qua > max) {
            max = qua
        }
        if (left > right) {
            do {
                rightIndex--
            } while (heights[rightIndex] > right)
        } else if (left < right) {
            do {
                leftIndex++
            } while (heights[leftIndex] < left)
        } else {
            do {
                leftIndex++
            } while (heights[leftIndex] <= left)

            do {
                rightIndex--
            } while (heights[rightIndex] <= right)
        }
    }
    return max
};
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]))
