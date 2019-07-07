 //   0 0
 //   1 1
 //  10 2
 //  11 3
 // 100 4
 // 101 5
 // 110 6
 // countBit(n) = countBit(n & n-1) + 1
var countBits = function(num) {
    let arr = [0,1]
    if (num === 0) { return [0]}
    if (num === 1) { return [0,1]}
    let ll = 2
    for(let i = 2; i <= num; i ++ ) {
        if (i >= ll * 2) {
            ll = ll * 2
        }
        arr.push( 1 + arr[i - ll])
    }
    return arr
};

let r = countBits(3)
console.log(r)
