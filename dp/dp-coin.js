const k = [1, 2, 5]

targetSum = 15

function main(target) {
  const minCount = target => {
    if (target <= 0) {
      return 0
    }
    if (target === 1 || target === 2 || target === 5) {
      return 1
    } else {
      return Math.min(
        minCount(target - 1),
        minCount(target - 2),
        minCount(target - 5),
      ) + 1
    }

  }
  return minCount(target)
}

console.log(main(15))
