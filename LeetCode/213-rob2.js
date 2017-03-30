/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var rob1 = require('./198-rob1');

  if (nums.length === 1) {
    return nums[0];
  }
  return Math.max(rob1(nums.slice(1)), rob1(nums.slice(0, nums.length - 1)));
};

module.exports = rob;