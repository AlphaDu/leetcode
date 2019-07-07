function FuckNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {FuckNode} t1
 * @param {FuckNode} t2
 * @return {FuckNode}
 */

const init = node => node ? node : new FuckNode(0)
var mergeTrees = function(t1, t2) {

    const mergeTraverse = (n1, n2) => {
        if (n1 === null && n2 === null) {
            return
        }
        n1 = init(n1)
        n2 = init(n2)
        const node = new FuckNode(n1.val + n2.val)
        node.left = mergeTrees(n1.left, n2.left)
        node.right = mergeTrees(n2.right, n2.right)

        return node
    }

    return mergeTraverse(t1, t2)
};


mergeTrees(new FuckNode(1), new FuckNode(2))
