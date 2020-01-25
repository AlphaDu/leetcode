class Node {
  constructor(val, nexts = []) {
    this.val = val
    this.nextSet = new Set(nexts)
  }
  get value() {
    return this.val
  }
  connect(node) {
    this.nextSet.add(node)
    node.nextSet.add(this)
  }
  getConnectList() {
    return Array.from(this.nextSet)
  }
}

const connect = (node1, node2) => node1.connect(node2)
const createDistinctValueGraph = (nodeValues,pairs) => {
  let nodeRefs = {}

  nodeValues.forEach(val => {
    nodeRefs[val] = new Node(val)
  })
  pairs.forEach(pair => {
    const nodeFrom = nodeRefs[pair[0]]
    const nodeTo = nodeRefs[pair[1]]
    nodeFrom.connect(nodeTo)
  })

  return {
    nodeRefs,
  }

}

const { nodeRefs } = createDistinctValueGraph(
  [1,2,3,4,5,6,7,8, 9],
  [
    [1,2],
    [1,5],
    [1,6],
    [2,3],
    [2,5],
    [3,4],
    [4,5],
    [6,7],
    [6,8],
    [6,9],
    [8,9],
  ]
)

let visited = []
const visit = node => visited = Array.from(new Set(visited.concat(node)))
const isVisited = node => visited.some(v => v === node)
const traverseNode = (node) => {
  let minTraceValue = node.value
  if (isVisited(node)) {
    return node.value
  }
  visit(node)

  const connectList = node.getConnectList()

  // traverse
  const traverseTarget = connectList.filter(next =>
    visited.every(visitNode => visitNode.value !== next.value)
  )

  const childrenTraceValues = traverseTarget.map(nextNode =>  traverseNode(nextNode))

  minTraceValue = Math.min(
    minTraceValue,
    ...childrenTraceValues,
  )
  // trace
  const traceTarget = connectList.filter(next =>
    visited.some(visitNode => visitNode.value === next.value)
  )
  if (traverseTarget.length === 0) {
    minTraceValue = Math.min(...[
      minTraceValue,
      ...traceTarget.map(traceNode => traceNode.value)
    ])
  }
  console.log('traceValue:' + minTraceValue + ' of ' + node.value)
  return minTraceValue
}
traverseNode(nodeRefs[1])
