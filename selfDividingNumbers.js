/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []
    for(let i = left; i < right; i ++) {
        let yes = true
        let numStr = String(i)

        for(let n = 0; n < numStr.length; n ++) {
            if (i % Number(numStr[n]) != 0) {
                yes = false
                break
            }
        }

        if(yes) {
            result.push(i)
        }

    }
    return result
};
