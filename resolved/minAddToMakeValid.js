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
var minAddToMakeValid = function(s) {
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
                stack.push(current)
            }
        }
    }

    return stack.getStack().length
};
