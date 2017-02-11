var DoublyLinkedList = require('../DoublyLinkedList');

test('DoublyLinkedList', function () {
  var doublyLinkedList = new DoublyLinkedList();
  expect(doublyLinkedList.insert(1, 10)).toBeFalsy();
  expect(doublyLinkedList.insert(-1, 10)).toBeFalsy();
  doublyLinkedList.insert(0, 10);
  doublyLinkedList.insert(1, 15);
  doublyLinkedList.insert(2, 20);
  doublyLinkedList.print();
  expect(doublyLinkedList.removeAt(-1)).toBeFalsy();
  expect(doublyLinkedList.removeAt(1)).toBe(15);
  doublyLinkedList.print();
});