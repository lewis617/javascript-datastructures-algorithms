/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  var map = {},
    max = 0,
    l = 0;

  for (var r = 0; r < s.length; ++r) {
    if (s.charAt(r) in map) {
      l = Math.max(l, map[s.charAt(r)] + 1);
    }
    map[s.charAt(r)] = r;
    max = Math.max(max, r - l + 1);
  }
  return max;
};

module.exports = lengthOfLongestSubstring;