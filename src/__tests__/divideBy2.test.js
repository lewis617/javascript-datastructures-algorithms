var divideBy2 = require('../divideBy2');

test('divideBy2', function () {
  expect(divideBy2(1)).toBe('1');
  expect(divideBy2(2)).toBe('10');
  expect(divideBy2(5)).toBe('101');
});