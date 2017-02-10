var PriorityQueue = require('../PriorityQueue');

test('PriorityQueue', function () {
  var priorityQueue = new PriorityQueue();
  priorityQueue.enqueue('John', 2);
  priorityQueue.enqueue('Jack', 1);
  priorityQueue.enqueue('Susan', 1);
  priorityQueue.print();
});