class StackNode<T> {
  value: T;
  next: StackNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Stack<T> {
  first: StackNode<T> | null = null;
  last: StackNode<T> | null = null;

  size: number = 0;

  push(value: T) {
    const newNode = new StackNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

const stack = new Stack<number>();
