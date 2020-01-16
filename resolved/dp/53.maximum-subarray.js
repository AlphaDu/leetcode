/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let answer = nums[0]
    let sum = 0
    nums.forEach(num => {
        if (sum > 0) {
            sum = sum + num
        } else {
            sum = num
        }
        answer = Math.max(answer, sum)
    })
    return answer
};
