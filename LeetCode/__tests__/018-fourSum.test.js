var fourSum = require('../018-fourSum');

test('fourSum', function () {
  expect(fourSum([-2, -1, -1, 1, 1, 2, 2], 0)).toEqual([[-2, -1, 1, 2], [-1, -1, 1, 1]]);
});
