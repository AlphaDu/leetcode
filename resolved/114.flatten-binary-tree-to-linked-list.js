/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */


var flatten = function(root) {
  const stack = []
  let  current = null
  const traverser = callback => {
    const traverse =  root =>  {
      if (!root) { return }
      callback(root)
      if (root.left) {
        traverse(root.left)
      }

      if (root.right) {
        traverse(root.right)
      }
    }
    return traverse
  }

  traverser(node => {
    stack.push(node)
  })(root)

  while (current = stack.pop()) {
    if (stack[stack.length-1]) {
      stack[stack.length-1].right = current
      stack[stack.length-1].left = null
    }
  }
  return root
};

