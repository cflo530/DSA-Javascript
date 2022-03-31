// Linked List Stack Implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.top) {
            return null;
        }
        if(this.top === this.bottom) {
            this.bottom = null;
        }
        
        this.top = this.top.next;
        this.length--;

        return this;
    }
}

const myStack = new Stack();
myStack.push(4);
myStack.push(3);
myStack.push(2);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
// console.log(myStack.peek());