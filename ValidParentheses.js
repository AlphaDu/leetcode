/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
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

    const pair = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const isOpen = c => Object.values(pair).indexOf(c) > -1
    const stack = createStack()

    for (let i = 0; i < s.length; i ++) {
        const current = s[i]
        if(isOpen(current)) {
            stack.push(current)
        } else {
            if (stack.get() === pair[current]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    console.log(stack.getStack())
    if (stack.getStack().length === 0) {
        return true
    } else {
        return false
    }

};

isValid('()')
