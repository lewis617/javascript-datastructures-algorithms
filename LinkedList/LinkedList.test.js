var LinkedList = require('./LinkedList');

test('LinkedList', function () {
  var linkedList = new LinkedList();
  linkedList.append(15);
  linkedList.append(10);
  expect(linkedList.toString()).toBe('15,10');
  expect(linkedList.removeAt(-1)).toBe(null);
  expect(linkedList.removeAt(3)).toBe(null);
  expect(linkedList.removeAt(1)).toBe(10);
  expect(linkedList.removeAt(0)).toBe(15);
  expect(linkedList.toString()).toBe('');
  expect(linkedList.insert(0, 15));
  expect(linkedList.insert(1, 12));
  expect(linkedList.insert(0, 10));
  expect(linkedList.insert(-1, 8));
  expect(linkedList.insert(4, 8));
  expect(linkedList.toString()).toBe('10,15,12');
  expect(linkedList.indexOf(12)).toBe(2);
  expect(linkedList.indexOf(8)).toBe(-1);
  expect(linkedList.remove(12)).toBe(12);
  expect(linkedList.remove(10)).toBe(10);
  expect(linkedList.toString()).toBe('15');
  expect(linkedList.isEmpty()).toBeFalsy();
  expect(linkedList.size()).toBe(1);
  expect(linkedList.getHead()).toEqual({ element: 15, next: null })
});