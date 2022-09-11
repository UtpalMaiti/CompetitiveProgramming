function nodeDepths(root) {
    let sumOfDepths = 0;
    const stack = [root];
    const depths = [0];

    while (stack.length > 0) {
        const node = stack.pop();
        const depth = depths.pop();

        sumOfDepths += depth;

        if (node.left) {
            stack.push(node.left);
            depths.push(depth + 1);
        }

        if (node.right) {
            stack.push(node.right);
            depths.push(depth + 1);
        }
    }

    return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
