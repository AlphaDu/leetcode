
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

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {

};
