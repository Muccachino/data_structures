"use strict";
class ListNode {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.value = val;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return -1;
        let poppedItem = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.tail = poppedItem === null || poppedItem === void 0 ? void 0 : poppedItem.prev;
        this.tail.next = null;
        this.length--;
        return poppedItem;
    }
    shift() {
        var _a;
        if (!this.head)
            return -1;
        let removedHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        this.head.prev = null;
        removedHead.next = null;
        this.length--;
        return removedHead;
    }
    unshift(value) {
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
    get(index) {
        if (index < 0 || index >= this.length)
            return -1;
        let currentItem;
        if (this.length - index <= Math.floor(this.length / 2)) {
            currentItem = this.head;
            for (let i = 0; i < index; i++) {
                currentItem = currentItem === null || currentItem === void 0 ? void 0 : currentItem.next;
            }
        }
        else {
            currentItem = this.tail;
            for (let i = 0; i < this.length - 1 - index; i++) {
                currentItem = currentItem === null || currentItem === void 0 ? void 0 : currentItem.prev;
            }
        }
        return currentItem;
    }
    set(value, index) {
        if (index < 0 || index >= this.length)
            return false;
        let setItem = this.get(index);
        setItem.value = value;
        return true;
    }
    insert(value, index) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            return this.unshift(value);
        if (index === this.length)
            return this.append(value);
        let newNode = new ListNode(value);
        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        newNode.next.prev = newNode;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return -1;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        let removeNode = this.get(index);
        let prevNode = this.get(index - 1);
        let nextNode = this.get(index + 1);
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}
const myDoublyList = new DoublyLinkedList();
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
//# sourceMappingURL=doubly_linked_list.js.map