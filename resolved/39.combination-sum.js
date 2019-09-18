/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const calcSum = arr => arr.reduce((s, c) => s + c, 0)
  candidates = candidates.sort((a, b) => a - b)
  const result = []

  const track = (waiting, arr) => {
    for(let i = 0; i < arr.length; i ++) {
      let sum = calcSum([...waiting,  arr[i]])
      if (sum === target) {
        result.push([...waiting,  arr[i]])
        break
      } else if (sum >= target) {
        break
      } else {
        track([...waiting, arr[i]], arr.slice(i))
      }
    }
  }
  track([], candidates)
  return result
};
let r = combinationSum([2,3,5], 8)
console.log(r)

