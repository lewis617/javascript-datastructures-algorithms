var Queue = require('./Queue');

test('Queue', function () {
  var queue = new Queue();
  expect(queue.isEmpty()).toBeTruthy();
  queue.enqueue('张三');
  queue.enqueue('李四');
  queue.enqueue('王五');
  expect(queue.front()).toBe('张三');
  expect(queue.toString()).toBe('张三,李四,王五');
  expect(queue.size()).toBe(3);
  expect(queue.isEmpty()).toBeFalsy();
  queue.dequeue();
  queue.dequeue();
  expect(queue.toString()).toBe('王五');
});