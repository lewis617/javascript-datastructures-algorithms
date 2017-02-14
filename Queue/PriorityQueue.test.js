var PriorityQueue = require('./PriorityQueue');

test('PriorityQueue', function () {
  var priorityQueue = new PriorityQueue();
  priorityQueue.enqueue('John', 2);
  priorityQueue.enqueue('Jack', 1);
  priorityQueue.enqueue('Susan', 3);
  expect(priorityQueue.toString()).toBe('Jack-1,John-2,Susan-3');

  expect(priorityQueue.front()).toEqual({ 'element': 'Jack', 'priority': 1 });
  expect(priorityQueue.size()).toBe(3);
  expect(priorityQueue.dequeue()).toEqual({ 'element': 'Jack', 'priority': 1 });
  expect(priorityQueue.front()).toEqual({ 'element': 'John', 'priority': 2 });
  expect(priorityQueue.size()).toBe(2);
});