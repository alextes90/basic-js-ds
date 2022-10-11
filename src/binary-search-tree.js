const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require("../extensions/list-tree.js");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rooot = null;
  }

  root() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    return this.rooot;
  }

  add(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    this.rooot = addNode(this.rooot, value);

    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    return search(this.rooot, value);

    function search(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data
        ? search(node.left, value)
        : search(node.right, value);
    }
  }

  find(value) {
    return search(this.rooot, value);

    function search(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return value < node.data
        ? search(node.left, value)
        : search(node.right, value);
    }
  }

  remove(value) {
    this.rooot = removeNode(this.rooot, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rooot) {
      return;
    }

    let node = this.rooot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rooot) {
      return;
    }

    let node = this.rooot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
