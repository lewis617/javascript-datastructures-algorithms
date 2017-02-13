var BinarySearchTree = require('../BinarySearchTree');

test('BinarySearchTree', function () {
  var binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(13);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);

  var keyList = [];
  binarySearchTree.inOrderTraverse(function (key) {
    keyList.push(key);
  });
  expect(keyList).toEqual([3, 5, 7, 9, 11, 13]);

  var keyList = [];
  binarySearchTree.inOrderTraverseUnRec(function (key) {
    keyList.push(key);
  });
  expect(keyList).toEqual([3, 5, 7, 9, 11, 13]);

  keyList = [];
  binarySearchTree.preOrderTraverse(function (key) {
    keyList.push(key);
  });
  expect(keyList).toEqual([11, 7, 5, 3, 9, 13]);

  keyList = [];
  binarySearchTree.preOrderTraverseUnRec(function (key) {
    keyList.push(key);
  });
  expect(keyList).toEqual([11, 7, 5, 3, 9, 13]);

  keyList = [];
  binarySearchTree.postOrderTraverse(function (key) {
    keyList.push(key);
  });
  expect(keyList).toEqual([3, 5, 9, 7, 13, 11]);

  keyList = [];
  binarySearchTree.postOrderTraverseUnRec(function (key) {
    keyList.push(key);
  });
  expect(keyList).toEqual([3, 5, 9, 7, 13, 11]);

  expect(binarySearchTree.min()).toBe(3);
  expect(binarySearchTree.max()).toBe(13);
  expect(binarySearchTree.search(3)).toBeTruthy();
  expect(binarySearchTree.search(4)).toBeFalsy();

  binarySearchTree.remove(7);
  keyList = [];
  binarySearchTree.preOrderTraverse(function (key) {
    keyList.push(key);
  });
  expect(keyList).toEqual([11, 9, 5, 3, 13]);

});