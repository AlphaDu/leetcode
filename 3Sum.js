/**
 * @param {number[]} nums
 * @return {number[][]}
 */


const getBoundryRedunantNum = (arr, fromStart = true, sum = 0) => {
  if (arr.length < 2) { return 0 }
  if (fromStart) {
    if (arr[0] === arr[1]) {
      return getBoundryRedunantNum(arr.slice(1), fromStart, sum + 1)
    }

    return sum
  } else {
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      return getBoundryRedunantNum(arr.slice(0, -1), fromStart, sum + 1)
    }

    return sum
  }
}


var threeSum = function(nums) {
  nums = nums.sort((a,b) => a-b)
  const results = []
  const pushResult = res => results.push(res)

  const findSum = (num, arr, callback) => {
    if (arr.length < 2) { return }
    const first = arr[0]
    const end = arr[arr.length - 1]
    const sum = num + first + end
    let subStartIndex = 0
    let subEndIndex = arr.length - 1
    if (sum === 0) {
      callback([num, first, end])
      return

    } else if (sum > 0) {
      subEndIndex = subEndIndex - 1 - getBoundryRedunantNum(arr.slice(0, -1), false)

    } else {
      subStartIndex = subStartIndex + 1 + getBoundryRedunantNum(arr.slice(0, -1), true)
    }

    return findSum(num, arr.slice(subStartIndex, subEndIndex + 1), callback)
  }
  for (let i = -0;  i < arr.length - 2; i ++) {
    if (nums[i] === nums[i-1])  {
      continue
    }
    const firstIndex = i
    const firstNumber = nums[firstIndex]
    const startIndex = i + 1
    const endIndex = nums.length - 1

    findSum(firstNumber, nums.slice(startIndex, endIndex + 1), pushResult)

  }
  console.log(results)
};
const arr = [-1,-2,3,3,1,0,0,0,-3]
threeSum(arr)


