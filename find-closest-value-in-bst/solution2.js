//Average : O(log(n)) time | O(1) space
//Worst : O(n) time | O(1) space
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHealper(tree, target, tree.value);
}
function findClosestValueInBstHealper(tree, target, closest) {
    let currentNode = tree;
    while (currentNode !== null) {
        if (tree === null) return closest;

        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }

        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > tree.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
    return closest;
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

exports.findClosestValueInBst = findClosestValueInBst;