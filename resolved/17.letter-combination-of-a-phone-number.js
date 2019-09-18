const mapping = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

// pick until group length === 0
function getCombination(numsStr) {
  const result = []

  const track = (picked, groups) => {
    if (groups.length === 0) {
      result.push(picked.join(''))
      return
    }
    groups[0].forEach(first => {
      let picking = picked.concat(first)
      return track(picking, groups.slice(1))
    })
  }


  let groups = numsStr.split('').map(num => mapping[num].split(''))
  track([], groups)
  return result
}
getCombination('23')
