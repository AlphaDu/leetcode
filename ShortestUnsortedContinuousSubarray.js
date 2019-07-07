/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

    if (nums.length === 1 || nums.length === 0) return 0
    if (nums.length === 2 && nums[1] < nums[0]) return 2
    if (nums.length === 2 && nums[1] >= nums[0]) return 0
    let s = []
    const leftMax = Number.MIN_SAFE_INTEGER
    const rightMin = Number.MAX_SAFE_INTEGER
    const judgeSubArray = (subArray, min, max) => {
        return subArray.every(n => n < max && n > min)
    }

    let moveLeft = false
    let shortest = nums.length
    let leftIndex = 0
    let rightIndex = nums.length
    while (leftIndex <= rightIndex) {
        const subString = nums.slice(leftIndex, rightIndex)
        const leftBoundaryNam = nums[leftIndex - 1]
        const rightBoundaryNam = nums[rightIndex]
        const bigerThanLeft = subString.every(s => s >= (leftBoundaryNam || Number.MIN_SAFE_INTEGER))
        const smallThanRight = subString.every(s => s <= (rightBoundaryNam || Number.MAX_SAFE_INTEGER))
        if (bigerThanLeft && smallThanRight) {

        } else {
            break
        }


        shortest = rightIndex - leftIndex
        s = nums.slice(leftIndex, rightIndex)
        if (bigerThanLeft && moveLeft) {
            moveLeft = false
            leftIndex ++
        } else if (smallThanRight && !moveLeft) {
            moveLeft = true
            rightIndex --
        }
    }
    console.log(s)
    return shortest
};

let r = findUnsortedSubarray([1,3,2,2,2])
console.log(r)

