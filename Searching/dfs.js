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
    dfsInorder() {
        return traverseInorder(this.root, []);
    }
    dfsPostorder() {
        return traversePostOrder(this.root, []);
    }
    dfsPreorder() {
        return traversePreOrder(this.root, []);
    }
};

const traverseInorder = (node, list) => {
    if(node.left) {
        traverseInorder(node.left, list);
    }

    list.push(node.value);

    if(node.right) {
        traverseInorder(node.right, list);
    }
    
    return list;
};

const traversePostOrder = (node, list) => {
    if(node.left) {
        traversePostOrder(node.left, list);
    }
    if(node.right) {
        traversePostOrder(node.right, list);
    }

    list.push(node.value);
    return list;
};

const traversePreOrder = (node, list) => {
    list.push(node.value);

    if(node.left) {
        traversePreOrder(node.left, list);
    }
    if(node.right) {
        traversePreOrder(node.right, list);
    }

    return list;
};

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);

// console.log(tree.dfsInorder());
// console.log(tree.dfsPostorder());
// console.log(tree.dfsPreorder());