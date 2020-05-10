/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
Array.prototype.getTop = function () {
  return this[this.length - 1]
}


var findKthLargest = function(nums, k) {
  const stack = []
  nums.forEach(num => {
      const cache  = []
      while (stack.length && stack.getTop() < num) {
        cache.push(stack.pop())
      }
      if (stack.length < k) {
        stack.push(num)
      }
      while (stack.length < k && cache.length) {
        stack.push(cache.pop())
      }
  })
  console.log(stack)
  return stack.getTop()
};
console.log(findKthLargest(
  [3,2,1,5,6,4],2))
