class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;

  constructor(val: T) {
    this.value = val;
  }
}

class DoublyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: number = 0;

  append(value: T) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return -1;
    let poppedItem = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.tail = poppedItem?.prev as ListNode<T>;
    this.tail.next = null;
    this.length--;

    return poppedItem;
  }

  shift() {
    if (!this.head) return -1;
    let removedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = this.head?.next as ListNode<T>;
    this.head.prev = null;
    removedHead.next = null;

    this.length--;

    return removedHead;
  }

  unshift(value: T) {
    let newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return -1;
    let currentItem: ListNode<T> | null;
    if (this.length - index <= Math.floor(this.length / 2)) {
      currentItem = this.head;
      for (let i = 0; i < index; i++) {
        currentItem = currentItem?.next as ListNode<T>;
      }
    } else {
      currentItem = this.tail;
      for (let i = 0; i < this.length - 1 - index; i++) {
        currentItem = currentItem?.prev as ListNode<T>;
      }
    }
    return currentItem;
  }

  set(value: T, index: number) {
    if (index < 0 || index >= this.length) return false;

    let setItem = this.get(index) as ListNode<T>;
    setItem.value = value;

    return true;
  }

  insert(value: T, index: number) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.append(value);

    let newNode = new ListNode(value);
    let prevNode = this.get(index - 1) as ListNode<T>;

    newNode.next = prevNode.next;
    newNode.next!.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;

    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return -1;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removeNode = this.get(index) as ListNode<T>;
    let prevNode = this.get(index - 1) as ListNode<T>;
    let nextNode = this.get(index + 1) as ListNode<T>;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removeNode.next = null;
    removeNode.prev = null;

    this.length--;

    return removeNode;
  }
}

const myDoublyList = new DoublyLinkedList<number>();

myDoublyList.append(200);
myDoublyList.append(400);
myDoublyList.append(600);
myDoublyList.append(800);
console.log("After APPEND", myDoublyList);

console.log("POPPED Item", myDoublyList.pop());
console.log("After POP", myDoublyList);

console.log("SHIFT Item", myDoublyList.shift());
console.log("After SHIFT", myDoublyList);

console.log("After UNSHIFT", myDoublyList.unshift(1000));

console.log("After GET", myDoublyList.get(1));

myDoublyList.set(10, 0);

console.log("After SET", myDoublyList);

myDoublyList.insert(20, 1);
console.log("After INSERT", myDoublyList);

myDoublyList.remove(1);
console.log("After REMOVE", myDoublyList);
