var LinkedList = require('../LinkedList');

test('LinkedList', function () {
  var linkedList = new LinkedList();
  linkedList.append(15);
  linkedList.append(10);
  linkedList.print();
  expect(linkedList.removeAt(-1)).toBe(null);
  expect(linkedList.removeAt(1)).toBe(10);
  linkedList.print();
  linkedList.insert(1, 12);
  linkedList.print();
  expect(linkedList.indexOf(12)).toBe(1);
  expect(linkedList.remove(12)).toBe(12);
  linkedList.print();
  expect(linkedList.isEmpty()).toBeFalsy();
  expect(linkedList.size()).toBe(1);
  expect(linkedList.getHead()).toEqual({ element: 15, next: null })
});