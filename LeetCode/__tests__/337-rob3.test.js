var rob = require('../337-rob3.js');
var BinarySearchTree = require('../../Tree/BinarySearchTree');

test('rob3', function () {
  var binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(13);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);

  expect(rob(binarySearchTree.getRoot())).toBe(27);
});