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
      return s[s.length - 1]
    },
    getStack() {
      return s
    }
  }
}
const getRelateIndex = people => people[1]
const getHeight = people => people[0]
const heightMap = {}
const pushToRelateMap = (people) => {
  const index = getHeight(people)
  if (heightMap[index]) {
    heightMap[index].push(people)
  } else {
    heightMap[index] = [people]
  }
}

var reconstructQueue2 = function (peoples) {
  let queue = []
  const inQueueHeightCountMap = {}

  const stack = createStack()
  const isSatisfied = (people, queue) => {
    const moreThanNum = queue.filter(qp => getHeight(qp) >= getHeight(people)).length
    return moreThanNum === getRelateIndex(people)
  }
  peoples.sort((a, b) => getHeight(a) - getHeight(b))
  peoples.forEach(pushToRelateMap);
  let heightIndexArr = Object.keys(heightMap).map(n => Number(n)).sort((a, b) => b - a)
  console.log(heightIndexArr)
  console.log(heightMap)
  heightIndexArr.forEach(height => {
    const currentHeightPeoples = heightMap[height]
    while (currentHeightPeoples.length) {
      const candidate = currentHeightPeoples[0]
      for (let i = 0; i < queue.length; i++) {
        const subqueue = queue.slice(0, i)
        if (isSatisfied(candidate, subqueue)) {
          queue = [
            ...subqueue,
            currentHeightPeoples.shift(),
            ...queue.slice(1 - queue.length)
          ]
        }
      }
    }
  })

  console.log(queue)
};
const insert = function (queue,index, v) {
    return [
        ...queue.slice(0,index),
        v,
        ...queue.slice(index,queue.length)
    ]
}
var reconstructQueue = function (peoples) {
    peoples.sort((p1, p2) => getHeight(p1) === getHeight(p2) ?  getRelateIndex(p1) - getRelateIndex(p2) : getHeight(p2) - getHeight(p1))
    console.log(peoples)
    let queue = []
    peoples.forEach(p => {
        queue = insert(queue, getRelateIndex(p), p)
    })
    console.log(queue)
};
reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])
