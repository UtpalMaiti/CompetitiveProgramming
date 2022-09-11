//Average : O(log(n)) time | O(log(n)) space
//Worst : O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHealper(tree, target, tree.value);
}
function findClosestValueInBstHealper(tree, target, closest) {

    if (tree === null) return closest;

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }

    if (target < tree.value) {
        return findClosestValueInBstHealper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHealper(tree.right, target, closest);
    } else {
        return closest;
    }

}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

exports.findClosestValueInBst = findClosestValueInBst;