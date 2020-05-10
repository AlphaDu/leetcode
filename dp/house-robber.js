/**
 * @param {number[]} nums
 * @return {number}
 */


const createMemoContext = () => {
  let cache = {}
  const apply = func => {
    return (...args) => {
      const key = JSON.stringify(args)
      console.log(Object.keys(cache).length)

      if (cache[key] !== undefined) {
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
const useMemo = createMemoContext()

const rob = function(nums) {
  if (nums.length === 0) return 0
  useMemo.flush()
  const countDp = i => {
    if (i === 0) return nums[0]
    if (i === 1) return Math.max(nums[0], nums[1])
    return Math.max(
      useMemo(countDp)(i-2) + nums[i],
      useMemo(countDp)(i-1)
    )
  }
  return useMemo(countDp)(nums.length -1)
};

console.log(rob([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))

