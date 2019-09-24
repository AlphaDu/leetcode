/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  n = n * 2
  const result = []
  const generate = (before, diffVal = 0) => {
    const remainLen =  n - before.length
    if (remainLen === 0) {
      result.push(before)
      return
    }
    if (diffVal > 0) {
      generate(before + ')', diffVal - 1)
    }
    if (diffVal < remainLen) {
       generate(before + '(', diffVal + 1)
    }
  }
  generate('', 0)
  return result
};
console.log(generateParenthesis(6))
