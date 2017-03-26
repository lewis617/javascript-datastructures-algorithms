var Stack = require('./../Stack/Stack');

function BinarySearchTree() {

  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function (key) {

    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  };

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };

  this.preOrderTraverseUnRec = function (callback) {
    if (root !== null) {
      var stack = new Stack();
      stack.push(root);
      while (!stack.isEmpty()) {
        var node = stack.pop();
        if (callback) {
          callback(node.key);
        }
        if (node.right) {
          stack.push(node.right);
        }
        if (node.left) {
          stack.push(node.left);
        }
      }
    }
  };

  this.inOrderTraverseUnRec = function (callback) {
    if (root !== null) {
      var stack = new Stack(),
        node = root;
      while (!stack.isEmpty() || node) {
        if (node) {
          stack.push(node);
          node = node.left;
        } else {
          node = stack.pop();
          callback(node.key);
          node = node.right;
        }
      }
    }
  };

  this.postOrderTraverseUnRec = function (callback) {
    if (root !== null) {
      var stack = new Stack(),
        outputStack = new Stack(),
        node;
      stack.push(root);
      while (!stack.isEmpty()) {
        node = stack.pop();
        outputStack.push(node);
        if (node.left) {
          stack.push(node.left);
        }
        if (node.right) {
          stack.push(node.right);
        }
      }
      while (!outputStack.isEmpty()) {
        node = outputStack.pop();
        if (callback) {
          callback(node.key);
        }
      }
    }
  };

  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  this.min = function () {
    return minNode(root);
  };

  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  this.max = function () {
    return maxNode(root);
  };

  var searchNode = function (node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  this.search = function (key) {
    return searchNode(root, key)
  };

  var findMinNode = function (node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  };

  var removeNode = function (node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        if (node === root) {
          root = null;
        }
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        var aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
      }
    }
  };

  this.remove = function (key) {
    return removeNode(root, key);
  };

  this.values = function (traverseFuc) {
    var keyList = [];
    this[traverseFuc](function (key) {
      keyList.push(key);
    });
    return keyList;
  };

  this.getRoot = function () {
    return root;
  }
}

module.exports = BinarySearchTree;