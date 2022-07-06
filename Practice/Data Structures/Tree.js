class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let curr = this.root;
        while (curr) {
            if (value > curr.value) {
                if (!curr.right) {
                    curr.right = node;
                    break;
                } else {
                    curr = curr.right;
                }
            } else {
                if (!curr.left) {
                    curr.left = node;
                    break;
                } else {
                    curr = curr.left;
                }
            }
        }
        return this;
    }

    lookup(value) {
        let result = null;
        let curr = this.root;
        while (curr) {
            if (value === curr.value) {
                result = curr;
                break;
            } else if (value > curr.value) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        return result;
    }

    remove(value) {
        if (value === this.root.value) {
            const node = this.root;
            this.root = null;
            return node;
        }
        let curr = this.root;
        let move = null;
        let prev = null;
        let deletedNode = null;
        while (curr) {
            if (value > curr.value) {
                prev = curr;
                curr = curr.right;
                move = 'right';
            } else if (value < curr.value) {
                prev = curr;
                curr = curr.left;
                move = 'left';
            } else {
                if (!curr.right) {
                    prev[move] = curr.left;
                } else if (!curr.left) {
                    prev[move] = curr.right;
                } else {
                    prev[move] = curr.right;
                    let join = curr.right;
                    while (join.left) {
                        join = join.left;
                    }
                    join.left = curr.left;
                }
                deletedNode = curr;
                break;
            }
        }
        return deletedNode;
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();

console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));

console.log(tree.remove(170));
console.log(traverse(tree.root))
