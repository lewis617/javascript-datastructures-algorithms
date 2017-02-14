var DoublyLinkedList = require('./DoublyLinkedList');

test('DoublyLinkedList', function () {
  var doublyLinkedList = new DoublyLinkedList();
  expect(doublyLinkedList.insert(1, 10)).toBeFalsy();
  expect(doublyLinkedList.insert(-1, 10)).toBeFalsy();
  doublyLinkedList.insert(0, 10);
  doublyLinkedList.insert(0, 15);
  doublyLinkedList.insert(1, 20);
  doublyLinkedList.insert(3, 25);
  expect(doublyLinkedList.toString()).toBe('15,20,10,25');

  expect(doublyLinkedList.removeAt(-1)).toBeFalsy();
  expect(doublyLinkedList.toString()).toBe('15,20,10,25');

  expect(doublyLinkedList.removeAt(1)).toBe(20);
  expect(doublyLinkedList.toString()).toBe('15,10,25');

  expect(doublyLinkedList.removeAt(2)).toBe(25);
  expect(doublyLinkedList.toString()).toBe('15,10');

  expect(doublyLinkedList.removeAt(0)).toBe(15);
  expect(doublyLinkedList.toString()).toBe('10');

  expect(doublyLinkedList.removeAt(0)).toBe(10);
  expect(doublyLinkedList.toString()).toBe('');
});