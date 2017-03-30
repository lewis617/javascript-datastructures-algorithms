var addTwoNumbers = require('../002-addTwoNumbers');

test('addTwoNumbers', function () {
  var getLinkedList = function () {
    var i = 0,
      linkedList,
      current;

    while (typeof arguments[i] !== 'undefined') {
      if (i === 0) {
        linkedList = { val: arguments[i], next: null };
        current = linkedList;
      } else {
        current.next = { val: arguments[i], next: null };
        current = current.next;
      }
      i++;
    }
    return linkedList;
  };

  expect(addTwoNumbers(getLinkedList(2, 4, 3), getLinkedList(5, 6, 4))).toEqual(getLinkedList(7, 0, 8));
  expect(addTwoNumbers(getLinkedList(1, 8), getLinkedList(0))).toEqual(getLinkedList(1, 8));
  expect(addTwoNumbers(getLinkedList(9), getLinkedList(1))).toEqual(getLinkedList(0, 1));
});