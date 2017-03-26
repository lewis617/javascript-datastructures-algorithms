var BinarySearchTree = require('./BinarySearchTree');

test('BinarySearchTree', function () {
  var binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(13);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);

  expect(binarySearchTree.values('inOrderTraverse')).toEqual([3, 5, 7, 9, 11, 13]);
  expect(binarySearchTree.values('inOrderTraverseUnRec')).toEqual([3, 5, 7, 9, 11, 13]);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 7, 5, 3, 9, 13]);
  expect(binarySearchTree.values('preOrderTraverseUnRec')).toEqual([11, 7, 5, 3, 9, 13]);
  expect(binarySearchTree.values('postOrderTraverse')).toEqual([3, 5, 9, 7, 13, 11]);
  expect(binarySearchTree.values('postOrderTraverseUnRec')).toEqual([3, 5, 9, 7, 13, 11]);

  expect(binarySearchTree.min()).toBe(3);
  expect(binarySearchTree.max()).toBe(13);
  expect(binarySearchTree.search(3)).toBeTruthy();
  expect(binarySearchTree.search(4)).toBeFalsy();

  binarySearchTree.insert(4);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 7, 5, 3, 4, 9, 13]);
  binarySearchTree.remove(3);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 7, 5, 4, 9, 13]);
  binarySearchTree.remove(7);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 9, 5, 4, 13]);
  binarySearchTree.remove(13);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 9, 5, 4]);
  binarySearchTree.remove(5);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 9, 4]);
  binarySearchTree.insert(6);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 9, 4, 3, 6, 5]);
  binarySearchTree.remove(4);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11, 9, 5, 3, 6]);

  binarySearchTree.remove(9);
  binarySearchTree.remove(5);
  binarySearchTree.remove(3);
  binarySearchTree.remove(6);
  binarySearchTree.remove(11);
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([]);
  expect(binarySearchTree.min()).toBe(null);
  expect(binarySearchTree.max()).toBe(null);
  expect(binarySearchTree.remove(11)).toBe(null);
  expect(binarySearchTree.getRoot()).toBe(null)
});