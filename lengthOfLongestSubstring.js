/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let startIndex = 0;
    let endIndex = 0;
    let maxLen = 0
    let expandOneStep = () => {
        endIndex = endIndex + 1
    }


    while(endIndex < s.length) {
        expandOneStep()
        let newElement = s.charAt(endIndex - 1)
        let substring = s.slice(startIndex, endIndex)

        let index = substring.indexOf(newElement)

        while (index < substring.length - 1) {
            startIndex = startIndex + index + 1
            substring = s.slice(startIndex, endIndex)
            index = substring.indexOf(newElement)
        }

        if( endIndex - startIndex > maxLen) {
            maxLen = endIndex - startIndex
        }

    }

    return maxLen
};

console.log(lengthOfLongestSubstring('123aaaaadfdjkfdg'))
