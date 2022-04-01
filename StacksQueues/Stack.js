// Linked List Stack Implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class StackLL {
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

// Stack Array Implementation
class StackArray {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    }
}