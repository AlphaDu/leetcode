/**
 * 585
 * @param nums: a mountain sequence which increase firstly and then decrease
 * @return: then mountain top
 */
const getMiddle = nums => [
    nums[Math.ceil((nums.length )/ 2)],
    Math.ceil((nums.length )/ 2)
]

const isNumber = d => Number(d) === d

const cutMiddle = nums => [
    nums.slice(0, Math.ceil((nums.length )/ 2)),
    nums.slice(Math.ceil((nums.length )/ 2))
]
const mountainSequence = function (arrs) {
    const traverse = nums => {
        if (nums.length === 0) {
            return
        }

        if (nums.length === 1) {
            return nums[0]
        }

        const [ midValue, midIndex ] = getMiddle(nums)

        const isBiggerThanLeft = !isNumber(nums[midIndex - 1]) || midValue > nums[midIndex - 1]
        const isBiggerThanRight = !isNumber(nums[midIndex + 1]) || midValue > nums[midIndex + 1]

        if (isBiggerThanLeft && isBiggerThanRight) {
            return midValue
        } else if (isBiggerThanRight){
            return traverse(nums.slice(0, Math.ceil((nums.length )/ 2)))
        } else {
            return traverse(nums.slice(Math.ceil((nums.length )/ 2)))
        }

    }
    return traverse(arrs)
}



