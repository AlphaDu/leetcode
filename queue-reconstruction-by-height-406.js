/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const createStack = () => {
    const s = []
    return {
        push(c) {
            return s.push(c)
        },
        pop() {
            return s.pop()
        },
        get() {
            return s[s.length -1]
        },
        getStack() {
            return s
        }
    }
}
var reconstructQueue = function(peoples) {
    peoples = peoples.sort((a,b) => b[0] - a[0])
    const isSatisfied = (people, sortedStack) => people[0] >
    const stack = []
    const waitStack = peoples
    peoples.for(p => {

    })
};
