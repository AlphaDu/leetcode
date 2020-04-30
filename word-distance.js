const wordSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const operator = words => {
  return {
    insert(char, index) {
      return
    },
    delete(index) {

    },
    replace(char, index) {

    }
  }
}

function minDistance2(s1, s2) {
  function dp(i, j) {
    console.log(`counting ${i} ${j}`)
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;
    if (s1[i] === s2[j]) {
      return dp(i - 1, j - 1)
    } else {
      return Math.min(
        dp(i, j - 1) + 1,
        dp(i - 1, j) + 1,
        dp(i - 1, j - 1) + 1
      )
    }
  }
  return dp(s1.length - 1, s2.length - 1)
}

console.log(minDistance2('rad', 'apple'))
