/**
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [map[nums[i]], i];
    } else {
      map[target - nums[i]] = i;
    }
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  var l = 0,
    r = nums.length - 1,
    results = [];
  while (l < r) {
    var s = nums[l] + nums[r];
    if (s === target) {
      results.push([l, r]);
      while (l < r && nums[l] === nums[l + 1]) {
        l++;
      }
      while (r > l && nums[r] === nums[r - 1]) {
        r++;
      }
      l++;
      r--;
    } else if (s < target) {
      l++;
    } else {
      r--;
    }
  }
  return results
};

module.exports = {
  twoSum: twoSum,
  twoSum2: twoSum2
};