/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var last = 0,
    now = 0;
  for (var i = 0; i < nums.length; i++) {
    var temp = last;
    last = now;
    now = Math.max(temp + nums[i], now);
  }

  return now;
};

module.exports = rob;