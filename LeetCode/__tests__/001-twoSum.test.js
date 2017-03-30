var twoSumObj = require('../001-twoSum');

test('twoSum', function () {
  expect(twoSumObj.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSumObj.twoSum2([-2, -1, -1, 1, 1], 0)).toEqual([[1, 4]]);
});