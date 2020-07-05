/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
  let i = -1
  const read = () => {
    let parsed = ''
    const next = getNextChar()
    while (i <= s.length && getNextChar() && (/[a-zA-Z]/.test(getNextChar()) || /\d/.test(getNextChar()))) {
      parsed = parsed + readSentence()
    }
    return parsed
  }
  const readChar = () => {
    i++
    if (!s[i]) return ''
    if (s[i + 1] && !/[a-zA-Z]/.test(s[i + 1])) {
      return s[i]
    }
    let c = s[i]
    return c + readChar()
  }
  const readNumStr = () => {
    i ++
    const next = getNextChar()
    if (/\d/.test(next)) {
      return s[i] + readNumStr()
    } else {
      return s[i]
    }
  }
  const readRepeat = () => {
    const next = getNextChar()
    if (/\d/.test(next)) {
      let repeatTime = readNumStr()
      i++ // jump [ because always legal
       const res = read().repeat(repeatTime)
      i ++ // jump ]
      return res
    }
  }
  const getNextChar = () => s[i + 1]
  const readSentence = () => {
    const next = getNextChar()
    if (next && (/[a-zA-Z]/.test(next) || /\d/.test(next))) {
      if (/[a-zA-Z]/.test(next)) {
        return readChar()
      } else {
        return readRepeat()
      }
    }
  }
  return read()
};
console.log(decodeString(''))
console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('10[bc]'))
