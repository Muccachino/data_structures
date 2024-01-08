class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;
  //TODO: Define height and depth

  buildTree(myData: T[], start: number = 0, end: number = myData.length - 1) {
    if (start > end) return null;

    //Array sortieren
    //myData.sort((a, b) => a - b);
    let mid: number = Math.floor((start + end) / 2);
    let node = new TreeNode(myData[mid]);

    node.left = this.buildTree(myData, start, mid - 1);
    node.right = this.buildTree(myData, mid + 1, end);

    return (this.root = node);
  }

  insert(value: T) {
    let newNode = new TreeNode<T>(value);
    if (!this.root) return (this.root = newNode);

    let currentCheck: TreeNode<T> | null = this.root;

    while (currentCheck) {
      if (value === currentCheck.value) return;
      if (value < currentCheck!.value) {
        if (!currentCheck.left) return (currentCheck.left = newNode);
        currentCheck = currentCheck!.left;
      }
      if (value > currentCheck!.value) {
        if (!currentCheck.right) return (currentCheck.right = newNode);
        currentCheck = currentCheck!.right;
      }
    }
  }

  insertRecursion(value: T) {
    const check = (node: TreeNode<T>) => {
      if (node.value === value) return;
      if (value < node.value) {
        check((node.left = node.left ?? new TreeNode<T>(value)));
      }
      if (value > node.value) {
        check((node.right = node.right ?? new TreeNode<T>(value)));
      }
    };

    check((this.root = this.root ?? new TreeNode<T>(value)));
  }

  find(value: T) {
    if (!this.root) return -1;

    let currentCheck = this.root;

    while (currentCheck) {
      if (value === currentCheck.value) return currentCheck;
      if (value < currentCheck.value) {
        if (!currentCheck.left) return -1;
        currentCheck = currentCheck.left;
      }
      if (value > currentCheck.value) {
        if (!currentCheck.right) return -1;
        currentCheck = currentCheck.right;
      }
    }
  }

  findRecursive(value: T) {
    if (!this.root) return -1;
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

    const search: any = (node: TreeNode<T>) => {
      if (node === null) return null;
      if (node.value === value) return node;

      return search(node.left!) ?? search(node.right);
    };
    return search(this.root) ?? -1;
  }

  breadthFirst() {
    let node = this.root!;
    const queue: TreeNode<T>[] = [];
    const visited: T[] = [];
    queue.push(node);

    while (queue.length) {
      node = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      visited.push(node.value);
      queue.shift();
    }

    return visited;
  }

  postOrder() {
    const visited: T[] = [];

    const traverse = (node: TreeNode<T>) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.value);
    };

    traverse(this.root!);

    return visited;
  }

  preOrder() {
    const visited: T[] = [];

    const traverse = (node: TreeNode<T>) => {
      visited.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root!);

    return visited;
  }

  inOrder() {
    const visited: T[] = [];

    const traverse = (node: TreeNode<T>) => {
      if (node.left) {
        traverse(node.left);
      }
      visited.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root!);

    return visited;
  }

  height(node: TreeNode<T>) {
    if (!node) return -1;

    let heightLeft: number = this.height(node.left!);
    let heightRight: number = this.height(node.right!);

    return Math.max(heightLeft, heightRight) + 1;
  }
}

function prettyPrint(node: TreeNode<number>, prefix = "", isLeft = true) {
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
prettyPrint(tree.root as TreeNode<number>);
console.log(tree.findRecursive(16));

//console.log(tree.breadthFirst());

console.log(tree.postOrder());
console.log(tree.preOrder());
console.log(tree.inOrder());

console.log(tree.height(tree.root!));
