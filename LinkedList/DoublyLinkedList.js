// Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
};

// Doubly Linked List Class
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const arr = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }
    insert(index, value) {
        // Check Index
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        // Check if index is 0
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const pointer = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = pointer;
        pointer.prev = newNode;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const deleteNode = leader.next;
        leader.next = deleteNode.next;
        leader.next.prev = deleteNode.prev;
        this.length--;
        return this.printList();
    }
    reverse() {
        if(!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;

        return this;
    }
};

const doubly = new DoublyLinkedList(10);
doubly.append(5);
doubly.append(16);
doubly.prepend(1);
doubly.insert(0, 0);
// doubly.insert(20, 100);
doubly.remove(2);
console.log(doubly.printList());
console.log(doubly.reverse().printList());