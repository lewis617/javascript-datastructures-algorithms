/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var findNSum = function (nums, target, N, result, results) {
    if (nums.length < N || target < nums[0] * N || target > nums[-1] * N) {
      return;
    }
    if (N === 2) {
      var l = 0,
        r = nums.length - 1;
      while (l < r) {
        var s = nums[l] + nums[r];
        if (s === target) {
          results.push(result.concat([nums[l], nums[r]]));
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
    } else {
      for (var i = 0; i < nums.length - N + 1; i++) {
        if (i === 0 || (i > 0 && nums[i - 1] !== nums[i])) {
          findNSum(nums.slice(i + 1), target - nums[i], N - 1, result.concat([nums[i]]), results);
        }

      }
    }
  };
  var results = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  findNSum(nums, target, 4, [], results);
  return results;
};

module.exports = fourSum;
