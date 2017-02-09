var getFibonacci = require('../fibonacci');

test('fibonacci', function () {
  expect(getFibonacci(3)).toEqual([1, 2, 3]);
  expect(getFibonacci(6)).toEqual([1, 2, 3, 5, 8, 13]);
});