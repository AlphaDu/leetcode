/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let dp = Array(matrix.length).fill(Array(matrix[0].length).fill(0))
  console.log(dp)
  let sum = 0
  matrix.forEach((row, rIndex) => {
    row.forEach((col, cIndex) => {
      if (matrix[rIndex][cIndex] !== 0 ) {
        dp[rIndex][cIndex] =
          Math.min(
            Math.min(
            (dp[rIndex] || [])[cIndex-1]|| 0,
                  (dp[rIndex-1] || [])[cIndex]|| 0,
            ),
            (dp[rIndex-1] || [])[cIndex-1]|| 0
          ) + 1
        sum = sum + dp[rIndex][cIndex]
      }

    })
  })
  console.log(dp)
  return sum
};
console.log(countSquares([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]))
