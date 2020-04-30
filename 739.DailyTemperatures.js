/**
 * @param {number[]} T
 * @return {number[]}
 */
//
// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
//
//     For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
//
//     Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

/**
 * @param {number[]} T
 * @return {number[]}
 */
const createStack = () => {
  const s = []
  return {
    push(c) {
      return s.push(c)
    },
    pop() {
      return s.pop()
    },
    get() {
      return s[s.length -1]
    },
    getStack() {
      return s
    },
    getAll() {
      return s
    },
    get length() {
      return s.length
    }
  }
}
var dailyTemperatures = function(T) {
  const R = Array(T.length).fill(0)
  const stack = createStack()

  T.forEach((t, index) => {
    while (stack.get() && stack.get().value < t) {
      let data = stack.get()
      stack.pop()
      R[data.index] = index - data.index
    }
    stack.push({
      value: t,
      index
    })
  })
  R[R.length - 1] = 0
  console.log(R)
  console.log(stack.getAll())
  return R
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
