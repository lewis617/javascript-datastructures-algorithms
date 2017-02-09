var Stack = require('../Stack');

test('Stack', function () {
  var stack = new Stack();
  expect(stack.isEmpty()).toBeTruthy();
  stack.push(5);
  stack.push(8);
  expect(stack.peek()).toBe(8);
  stack.push(11);
  expect(stack.size()).toBe(3);
  expect(stack.isEmpty()).toBeFalsy();
  stack.push(15);
  stack.pop();
  stack.pop();
  expect(stack.size()).toBe(2);
  stack.print();
});