/**
 * @param {number[][]} grid
 * @return {number}
 */
const isValid = n => n !== undefined && n !== null
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
  apply.put = (k,v) =>{
    cache[k] = v
  }
  apply.get = k =>{
    return cache[k]
  }
  apply.getAll = () =>{
    return cache
  }
  return apply
}
const cache = createMemoContext()
var minPathSum = function(grid) {
  const isValidGrid = i => j => isValid(grid[i]) && isValid(grid[i][j])
  const gid = (i, j) => `${i}~${j}`
  const dp = i => j => {
    if (cache.get(gid(i,j))) {
      return cache.get(gid(i,j))
    }
    if (!isValidGrid(i - 1)(j) && !isValidGrid(i)(j - 1)) {
      const res = grid[i][j]
      cache.put(gid(i,j), res)
      return res
    }
    const res = Math.min(
      isValidGrid(i-1)(j) ? dp(i-1)(j) : Number.MAX_SAFE_INTEGER,
      isValidGrid(i)(j-1) ? dp(i)(j-1) : Number.MAX_SAFE_INTEGER,
    ) + grid[i][j]
    cache.put(gid(i,j), res)
    return res
  }

  cache.flush()
  return dp(grid.length-1)(grid[0].length-1)
};

const res =  minPathSum([
  [1,2,3],
  [1,1,1],
  [2,1,1]
])

console.log(res)
console.log(cache.getAll())
