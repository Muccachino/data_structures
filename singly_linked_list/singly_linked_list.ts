class ListNode {
  value: number;
  next: ListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);

//console.log(head);

class SinglyLinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  length: number = 0;

  append(value: number) {
    let newNode: ListNode = new ListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this.head;
    }
    let currentItem: ListNode | null = this.head;
    let tempItem: ListNode | null = this.head.next;
    while (tempItem !== this.tail) {
      currentItem = currentItem!.next;
      tempItem = tempItem!.next;
    }
    currentItem!.next = null;
    this.tail = currentItem;
    this.length--;
    return tempItem;
  }


  shift() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this.head;
    }
    let currentItem: ListNode | null = this.head;
    let tempItem: ListNode | null = this.head.next;

    this.head = this.head.next;
    this.length--;
    
    return currentItem;
  }

  unshift(value: number) {
    let newHead = new ListNode(value)
    if (!this.head){
      this.head = newHead;
      this.tail = this.head;
    }
    else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this
  }
}

const myList = new SinglyLinkedList();
myList.append(5);
/* myList.append(10);
myList.append(15);
myList.append(20); */

//console.log(myList);

console.log("POP Item",myList.pop());
console.log("After POP",myList);

console.log("SHIFT Item",myList.shift());
console.log("After SHIFT",myList);

console.log(myList.unshift(200));
