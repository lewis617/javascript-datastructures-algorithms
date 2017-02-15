// 导入 Stack
var Stack = require('./Stack');

test('Stack', function () {
  // 实例化一个 stack 对象
  var stack = new Stack();

  // 期望 stack 为空
  expect(stack.isEmpty()).toBeTruthy();

  stack.push(5);
  stack.push(8);
  // 期望 stack 最后一项是8
  expect(stack.peek()).toBe(8);
  // 期望 stack 的长度为2
  expect(stack.size()).toBe(2);
  // 期望 stack 不为空
  expect(stack.isEmpty()).toBeFalsy();

  stack.pop();
  // 期望 stack 长度为1
  expect(stack.size()).toBe(1);
  // 期望 stack 转化成的字符串为'5'
  expect(stack.toString()).toBe('5');
  stack.clear();
  // 期望 stack 长度为0
  expect(stack.size()).toBe(0);
});