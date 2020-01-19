const quickSort = arr => {
  if (arr.length <= 1) {
    return arr
  }
  let target = arr[0]
  let index = 1
  const small = []
  const big = []
  while (small.length + big.length < arr.length -1) {
    if (arr[index] < target) {
      small.push(arr[index])
    } else {
      big.push(arr[index])
    }
    index ++
  }

  let result = quickSort(small).concat([target].concat(quickSort(big)))
  return result
}

console.log(quickSort([5,4,7,6,2,123,43,4930,12389,1,49,3,10,0,12,32,40]))
