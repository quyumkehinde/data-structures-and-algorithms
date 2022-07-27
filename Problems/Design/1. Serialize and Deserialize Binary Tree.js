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
    function dfs(node) {
        res += node.val + '-';

        if (node.left) {
            dfs(node.left);
        } else {
            res += node.left + '-';
        }

        if (node.right) {
            dfs(node.right);
        } else {
            res += node.right + '-';
        }
    }
    dfs(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    function Node(val, left = null, right = null) {
        return { val, left, right };
    }

    let arr = data.split('-');
    arr.pop();

    let root = Node(arr[0]), queue = [root], index = 0;

    while (index++ < arr.length) {
        let node = queue[queue.length - 1];
        let leftNode = Node(arr[index]);
        node.left = leftNode;
        if (leftNode.val !== null) {
            queue.push(leftNode);
            continue;
        }

        queue.pop();
        let rightNode = Node(arr[index + 1]);
        node.right = rightNode;

        if (rightNode.val !== null) {
            queue.push(rightNode);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */