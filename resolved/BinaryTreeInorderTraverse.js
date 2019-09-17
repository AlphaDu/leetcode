/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var inorderTraversal = function(root) {
    const vals = []
    const traverse = root => {
        if (!root) return
        traverse(root.left)
        vals.push(root.val)
        traverse(root.right)
    }
    traverse(root)

    return vals
};
