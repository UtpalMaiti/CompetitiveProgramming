function nodeDepths(root) {
    return calculateNodeDepths(root, 0);
}

function calculateNodeDepths(node, depth) {
    if (node === null) return 0;

    return (
        depth +
        calculateNodeDepths(node.left, depth + 1) +
        calculateNodeDepths(node.right, depth + 1)
    );
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
