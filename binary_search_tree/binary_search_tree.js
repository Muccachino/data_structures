"use strict";
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //TODO: Define height and depth
    buildTree(myData, start = 0, end = myData.length - 1) {
        if (start > end)
            return null;
        //Array sortieren
        //myData.sort((a, b) => a - b);
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode(myData[mid]);
        node.left = this.buildTree(myData, start, mid - 1);
        node.right = this.buildTree(myData, mid + 1, end);
        return (this.root = node);
    }
    insert(value) {
        let newNode = new TreeNode(value);
        if (!this.root)
            return (this.root = newNode);
        let currentCheck = this.root;
        while (currentCheck) {
            if (value === currentCheck.value)
                return;
            if (value < currentCheck.value) {
                if (!currentCheck.left)
                    return (currentCheck.left = newNode);
                currentCheck = currentCheck.left;
            }
            if (value > currentCheck.value) {
                if (!currentCheck.right)
                    return (currentCheck.right = newNode);
                currentCheck = currentCheck.right;
            }
        }
    }
    insertRecursion(value) {
        var _a;
        const check = (node) => {
            var _a, _b;
            if (node.value === value)
                return;
            if (value < node.value) {
                check((node.left = (_a = node.left) !== null && _a !== void 0 ? _a : new TreeNode(value)));
            }
            if (value > node.value) {
                check((node.right = (_b = node.right) !== null && _b !== void 0 ? _b : new TreeNode(value)));
            }
        };
        check((this.root = (_a = this.root) !== null && _a !== void 0 ? _a : new TreeNode(value)));
    }
    find(value) {
        if (!this.root)
            return -1;
        let currentCheck = this.root;
        while (currentCheck) {
            if (value === currentCheck.value)
                return currentCheck;
            if (value < currentCheck.value) {
                if (!currentCheck.left)
                    return -1;
                currentCheck = currentCheck.left;
            }
            if (value > currentCheck.value) {
                if (!currentCheck.right)
                    return -1;
                currentCheck = currentCheck.right;
            }
        }
    }
    findRecursive(value) {
        var _a;
        if (!this.root)
            return -1;
        /*     let found;
        const check = (node: TreeNode<T>) => {
          if (node.value === value) return (found = node);
          if (value < node.value) {
            if (!node.left) return (found = -1);
            check(node.left);
          }
          if (value > node.value) {
            if (!node.right) return (found = -1);
            check(node.right);
          }
        };
        check(this.root);
        return found; */
        const search = (node) => {
            var _a;
            if (node === null)
                return null;
            if (node.value === value)
                return node;
            return (_a = search(node.left)) !== null && _a !== void 0 ? _a : search(node.right);
        };
        return (_a = search(this.root)) !== null && _a !== void 0 ? _a : -1;
    }
    breadthFirst() {
        let node = this.root;
        const queue = [];
        const visited = [];
        queue.push(node);
        while (queue.length) {
            node = queue[0];
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
            visited.push(node.value);
            queue.shift();
        }
        return visited;
    }
    postOrder() {
        const visited = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            visited.push(node.value);
        };
        traverse(this.root);
        return visited;
    }
    preOrder() {
        const visited = [];
        const traverse = (node) => {
            visited.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return visited;
    }
    inOrder() {
        const visited = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            visited.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return visited;
    }
    height(node) {
        if (!node)
            return -1;
        let heightLeft = this.height(node.left);
        let heightRight = this.height(node.right);
        return Math.max(heightLeft, heightRight) + 1;
    }
}
function prettyPrint(node, prefix = "", isLeft = true) {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└──" : "┌──"}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "│   " : "    "}`, true);
    }
}
const data = [5, 10, 21, 87, 301, 350];
const tree = new BinarySearchTree();
tree.buildTree(data);
tree.insertRecursion(16);
prettyPrint(tree.root);
console.log(tree.findRecursive(16));
//console.log(tree.breadthFirst());
console.log(tree.postOrder());
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.height(tree.root));
//# sourceMappingURL=binary_search_tree.js.map