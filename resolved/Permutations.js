/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const pick = (nums, index) => [ nums[index], nums.filter((n, i) => i !== index)]


    const results = []

    const traverse = (arr, picked) => {
        if (arr.length === 0) {
            results.push(picked)
            return
        }
        arr.forEach((_, index) => {
            const mypick = [...picked]
            const [ele, remain] = pick(arr, index)
            mypick.push(ele)
            traverse(remain, mypick)
        })
    }
    traverse(nums, [])
    return results


};
permute([1,2,3])
