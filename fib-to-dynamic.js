let count = 0
const fib = n => {
    if (n == 1 || n == 2) return 1;
    count ++
    return fib(n-2) + fib(n-1)
}

const getTimefunc =  (func) => {
    const start = Date.now()
    const result = func()
    const end = Date.now()
    return result
}

console.log(getTimefunc(() => fib(30)))
console.log('count:'+ count)
count = 0
const useCache = (func) => {
    const cache = {}

    return function applyFunc (...args) {
        const key = JSON.stringify(args)
        if (cache[key]) {
            return cache[key]
        } else {
            console.log('notgot!!', ...args)
            const result = func(...args)

            cache[key] = result
            return result
        }
    }
}
Y = function(f) {
    return function(g) { 
        return g(g) 
    } (
      function(g) { return function(n) { return f(g(g))(n) } }
    )
}

const rec = Y => f => x  => f(Y(f))(x)
const yfib = f => n => {
    if (n == 1 || n == 2) return 1;
    count ++
    return f(n-2) + f(n-1)
}
let recFib = rec(Y)(useCache(yfib))
console.log(getTimefunc(() => recFib(30)))
console.log('count:'+ count)
