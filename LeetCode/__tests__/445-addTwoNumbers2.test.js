var addTwoNumbers = require('../445-addTwoNumbers2');

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

  expect(addTwoNumbers(getLinkedList(7, 2, 4, 3), getLinkedList(5, 6, 4))).toEqual(getLinkedList(7, 8, 0, 7));
  expect(addTwoNumbers(getLinkedList(7), getLinkedList(5))).toEqual(getLinkedList(1, 2));
});