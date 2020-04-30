/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const createStack = () => {
  let s = []
  return {
    pushAll(arr) {
      s = s.concat(arr)
    },
    push(c) {
      return s.push(c)
    },
    pop() {
      return s.pop()
    },
    get() {
      return s[s.length -1]
    },
    get length() {
      return s.length
    },
    getAll() {
      return s
    }
  }
}
var topKFrequent = function(nums, k) {
  const nmap = {}
  nums.forEach(num => {
    if (!nmap[num]) {
      nmap[num] = 1
    } else {
      nmap[num] = nmap[num] +1
    }
  })
  const stack = createStack()
  Object.keys(nmap).forEach(num => {
    const cache = []
    const f = nmap[num]
    while (stack.length && f > stack.get().f) {
      cache.push(stack.pop())
    }
    stack.pushAll([
      {value: Number(num), f },
      ...cache.reverse()
      ].slice(0,k - stack.length)
    )
  })
  return stack.getAll().map(d => d.value)
};

console.log(topKFrequent([1,2,2,3,3,3], 2))
