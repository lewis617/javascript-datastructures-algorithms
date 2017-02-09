var Queue = require('../Queue');

test('Queue', function () {
  var queue = new Queue();
  expect(queue.isEmpty()).toBeTruthy();
  queue.enqueue('John');
  queue.enqueue('Jack');
  queue.enqueue('Susan');
  expect(queue.front()).toBe('John');
  expect(queue.getItems()).toEqual(["John", "Jack", "Susan"]);
  expect(queue.size()).toBe(3);
  expect(queue.isEmpty()).toBeFalsy();
  queue.dequeue();
  queue.dequeue();
  expect(queue.getItems()).toEqual(['Susan'])
});