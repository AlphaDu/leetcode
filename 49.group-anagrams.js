const mul = (a, b) => a * b
const cmap = {
  a: 2,
  b: 3,
  c: 5,
  d: 7,
  e: 11,
  f: 13,
  g: 17,
  h: 19,
  i: 23,
  j: 29,
  k: 31,
  l: 37,
  m: 41,
  n: 43,
  o: 47,
  p: 53,
  q: 59,
  r: 61,
  s: 67,
  t: 71,
  u: 73,
  v: 79,
  w: 83,
  x: 89,
  y: 97,
  z: 101,
}
const nmap = {
  2: 'a',
  3: 'b',
  5: 'c',
  7: 'd',
  11: 'e',
  13: 'f',
  17: 'g',
  19: 'h',
  23: 'i',
  29: 'j',
  31: 'k',
  37: 'l',
  41: 'm',
  43: 'n',
  47: 'o',
  53: 'p',
  59: 'q',
  61: 'r',
  67: 's',
  71: 't',
  73: 'u',
  79: 'v',
  83: 'w',
  89: 'x',
  97: 'y',
  101: 'z',
}
const sortArr = (a1, a2) => {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] - a2[i] !== 0) {
      return a1[i] - a2[i]
    }
  }
  return true
}
var groupAnagrams = function (strs) {
  const toNumber = c => cmap[c]
  const toChar = n => nmap[n]

  const hmap = {}
  strs.forEach(str => {
    const sorts = str.split('').map(toNumber)
    const hashKey = sorts.reduce(mul, 1)
    if (hmap[hashKey]) {
      hmap[hashKey].push(sorts)
    } else {
      hmap[hashKey] = [sorts]
    }
  })
  return Object.values(hmap).map(sorts => {
    sorts.sort(sortArr)
    return sorts.map(sort => sort.map(toChar).join(''))
  })
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
