/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let res = '';
    function buildString(node) {
        if (node === null) {
            res += 'e ';
        } else {
            res += node.val + ' ';
            buildString(node.left);
            buildString(node.right);
        }
    }
    buildString(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    function Node(val) {
        return { val, right: null, left: null };
    }
    let arr = data.split(' '), index = -1;
    function buildTree() {
        if (index++ >= arr.length) return;
        if (arr[index] === 'e') return null;
        const node = Node(arr[index]);
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */