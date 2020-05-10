
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}


const getChildren = node => [node.left, node.right].filter(d => d)
const getChildrens = nodes => nodes.flatMap(getChildren)
var levelOrder = function(r) {
  const res = []
  const traverseLayer = (nodes, func) => {
    getChildren([])
    if (nodes && nodes.length) {
      func(nodes)
      return traverseLayer(getChildrens(nodes),func)
    }
  }
  traverseLayer([r], nodes => res.push(nodes.map(node => node.val)))
  return res
};

let a = new TreeNode(1)
let b = new TreeNode(2,a)
let c = new TreeNode(3,)
let d = new TreeNode(4, c,b)

console.log(levelOrder(d))
