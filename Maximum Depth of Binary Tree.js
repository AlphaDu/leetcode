/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    const treverseDep = (node, dep) => {
        if (!node) {
            return dep
        }
        const leftDep = treverseDep(node.left, dep + 1)
        const rightDep = treverseDep(node.right, dep + 1)

        return leftDep > rightDep ? leftDep : rightDep
    }
    return treverseDep(root, 0)
};
