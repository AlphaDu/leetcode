

const exceptOne = (nums) => {
    if (nums.length === 1) {
        return  {
            val: nums[0],
            left: null,
            right: null
        }
    } else {
        return false
    }
}

var constructMaximumBinaryTree = function(nums) {
    let leftIndex = 0
    let rightIndex = nums.length - 1
    const createNode = num => ({ val: num, left: null, right: null })
    let leftRoot = createNode(nums[leftIndex])
    let rightRoot = createNode(nums[rightIndex])

    if (exceptOne(nums)) return exceptOne(nums)

    const traverseFromRoot = (root, newNode, toLeft)=> {
        if (newNode.val > root.val) {
            return traverseFromRoot(newNode, root, !toLeft)
        }

        if (toLeft) {
            if (root.left && !!root.left.val) {
                const l = root.left
                root.left = traverseFromRoot(l, newNode, toLeft)
            } else {
                root.left = newNode
            }
        } else {
            if (root.right && !!root.right.val) {
                const r = root.right
                root.right = traverseFromRoot(r, newNode, toLeft)
            } else {
                root.right = newNode
            }
        }

        return root
    }


    while(rightIndex - leftIndex >= 3) {
        leftIndex ++
        rightIndex --
        leftRoot = traverseFromRoot(leftRoot, createNode(nums[leftIndex]), false)
        rightRoot = traverseFromRoot(rightRoot, createNode(nums[rightIndex]), true)
    }

    if (rightIndex - leftIndex === 2) {
        leftIndex ++
        leftRoot = traverseFromRoot(leftRoot, createNode(nums[leftIndex]), false)
    }

    if (leftRoot.val > rightRoot.val) {
        leftRoot = traverseFromRoot(leftRoot, rightRoot, false)
        return leftRoot
    } else {
        rightRoot = traverseFromRoot(rightRoot, leftRoot, true)
        return rightRoot
    }

};
constructMaximumBinaryTree([3,2,1])

