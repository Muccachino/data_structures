"use strict";
class StackNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        const newNode = new StackNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        }
        else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first)
            return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
const stack = new Stack();
//# sourceMappingURL=stack.js.map