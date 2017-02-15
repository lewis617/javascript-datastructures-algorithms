var PriorityQueue = require('./PriorityQueue');

test('PriorityQueue', function () {
  var priorityQueue = new PriorityQueue();
  priorityQueue.enqueue('张三', 2);
  priorityQueue.enqueue('李四', 1);
  priorityQueue.enqueue('王五', 3);
  expect(priorityQueue.toString()).toBe('李四-1,张三-2,王五-3');

  expect(priorityQueue.front()).toEqual({ 'element': '李四', 'priority': 1 });
  expect(priorityQueue.size()).toBe(3);
  expect(priorityQueue.dequeue()).toEqual({ 'element': '李四', 'priority': 1 });
  expect(priorityQueue.front()).toEqual({ 'element': '张三', 'priority': 2 });
  expect(priorityQueue.size()).toBe(2);
});