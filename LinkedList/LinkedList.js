// Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

// LinkedList Class
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
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

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const pointer = leader.next;
        leader.next = newNode;
        newNode.next = pointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        // Check Index
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        
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
        this.length--;
        return this.printList();
    }
};

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(3);
linkedList.insert(2, 99);
linkedList.insert(20, 100);
linkedList.remove(2);
console.log(linkedList.printList());