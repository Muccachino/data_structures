"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const head = new ListNode(5);
head.next = new ListNode(10);
head.next.next = new ListNode(20);
module.exports = class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        let newNode = new ListNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        if (!this.head)
            return undefined;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this.head;
        }
        let currentItem = this.head;
        let tempItem = this.head.next;
        while (tempItem !== this.tail) {
            currentItem = currentItem.next;
            tempItem = tempItem.next;
        }
        currentItem.next = null;
        this.tail = currentItem;
        this.length--;
        return tempItem;
    }
    shift() {
        if (!this.head)
            return undefined;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this.head;
        }
        let currentItem = this.head;
        let tempItem = this.head.next;
        this.head = this.head.next;
        this.length--;
        return currentItem;
    }
    unshift(value) {
        let newHead = new ListNode(value);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        }
        else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let currentItem = this.head;
        for (let i = 0; i < index; i++) {
            currentItem = currentItem.next;
        }
        return currentItem;
    }
    set(value, index) {
        let searchNode = this.get(index);
        if (!searchNode)
            return false;
        searchNode.value = value;
        return true;
    }
    insert(value, index) {
        if (index < 0 || index > this.length)
            return -1;
        if (index === 0)
            return this.unshift(value);
        if (index === this.length)
            return this.append(value);
        const newNode = new ListNode(value);
        let preNode = this.get(index - 1);
        newNode.next = preNode === null || preNode === void 0 ? void 0 : preNode.next;
        preNode.next = newNode;
        this.length++;
        return this;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return -1;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        const removeNode = this.get(index);
        let preNode = this.get(index - 1);
        preNode.next = removeNode.next || null;
        this.length--;
        return removeNode;
    }
    reverse() {
        if (!this.head)
            return null;
        if (this.length === 1)
            return this;
        let oldTail = this.tail;
        let oldHead = this.head;
        this.tail = oldHead;
        this.head = oldTail;
        let prev;
        let next;
        let node = this.tail;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        this.tail.next = null;
        return this;
    }
};
/* const myList = new SinglyLinkedList();
myList.append(5);
myList.append(10);
myList.append(15);
myList.append(20);

console.log(myList);

console.log("POP Item", myList.pop());
console.log("After POP", myList);

console.log("SHIFT Item", myList.shift());
console.log("After SHIFT", myList);

console.log(myList.unshift(200));

myList.append(10);
myList.append(20);

console.log(myList);
console.log("GET Index", myList.get(1));

console.log("SET Index", myList.set(3000, 1));
console.log("After SET", myList);

console.log("After INSERT", myList.insert(500, 1));
console.log("REMOVED Item", myList.remove(1));
console.log("After REMOVE", myList);

console.log("After REVERSE", myList.reverse()); */
//# sourceMappingURL=singly_linked_list.js.map