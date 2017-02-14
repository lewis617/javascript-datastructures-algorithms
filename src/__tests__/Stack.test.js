var Stack = require('../Stack');

test('Stack', function () {
  var stack = new Stack();
  expect(stack.isEmpty()).toBeTruthy();
  stack.push(5);
  stack.push(8);
  expect(stack.peek()).toBe(8);
  expect(stack.size()).toBe(2);
  expect(stack.isEmpty()).toBeFalsy();
  stack.pop();
  expect(stack.size()).toBe(1);
  expect(stack.toString()).toBe('5');
  stack.clear();
  expect(stack.size()).toBe(0);
});