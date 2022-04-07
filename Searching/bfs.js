class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while(true) {
                // Left 
                if(value < current.value) {
                    if(!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    // Right
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    lookup(value) {
        if(!this.root) return false;

        let current = this.root;

        while(current) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else if(current.value === value) {
                return current;
            } 
        }

        return false;
    }
    remove(value) {
        if(!this.root) return false;

        let current = this.root;
        let parent = null;

        while(current) {
            if(value < current.value) {
                parent = current;
                current = current.left;
            } else if(value > current.value) {
                parent = current;
                current = current.right;
            } else if(current.value === value) {
                // No Right Child
                if(current.right === null) {
                    if(parent === null) {
                        this.root = current.left;
                    } else {
                        // Parent > Current
                        if(current.value < parent.value) {
                            parent.left = current.left;
                        } 
                        // Parent < Current
                        else if(current.value > parent.value) {
                            parent.right = current.left;
                        }
                    }
                }
                // Right Child Doesn't Have Left Child
                else if(current.right.left === null) {
                    if(parent === null) {
                        this.root = current.left;
                    } else {
                        current.right.left = current.left;

                        // Parent > Current, make right child a right child of parent
                        if(current.value < parent.value) {
                            parent.left = current.right;
                        }
                        // Parent < Current, make right child a right child of parent
                        else if(current.value > parent.value) {
                            parent.right = current.right;
                        }
                    }
                }
                // Right Child has Left Child
                else {
                    // Find Right Child's Left Most Child
                    let leftMost = current.right.left;
                    let leftMostParent = current.right;

                    while(leftMost.left !== null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    // Parent Left Subtree is now leftmost's right subtree
                    leftMostParent.left = leftMost.right;
                    leftMost.left = current.left;
                    leftMost.right = current.right;

                    if(parent === null) {
                        this.root = leftMost;
                    } else {
                        if(current.value < parent.value) {
                            parent.left = leftMost;
                        } else if(current.value > parent.value) {
                            parent.right = leftMost;
                        }
                    }
                }
                return true;
            }
        }
    }
    bfs() {
        let current = this.root;
        let list = [];
        let queue = [];

        queue.push(current);

        while(queue.length) {
            current = queue.shift();
            list.push(current.value);
            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
        }

        return list;
    }

    bfsRecursive(queue, list) {
        if(!queue.length) {
            return list;
        }

        let current = queue.shift();
        list.push(current.value);

        if(current.left) {
            queue.push(current.left);
        }
        if(current.right) {
            queue.push(current.right);
        }

        return this.bfsRecursive(queue, list);
    }
};

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log(tree.bfs());
// console.log(tree.bfs([tree.root], []));