var PriorityQueue = require('../PriorityQueue');

test('PriorityQueue', function () {
  var priorityQueue = new PriorityQueue();
  priorityQueue.enqueue('John', 2);
  priorityQueue.enqueue('Jack', 1);
  priorityQueue.enqueue('Susan', 1);
  expect(priorityQueue.getItems()).toEqual([
    { "element": "Jack", "priority": 1 },
    { "element": "Susan", "priority": 1 },
    { "element": "John", "priority": 2 }
  ]);
});