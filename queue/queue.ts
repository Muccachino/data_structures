class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  first: QueueNode<T> | null = null;
  last: QueueNode<T> | null = null;
  size: number = 0;

  enqueue(value: T) {
    const newNode = new QueueNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
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
