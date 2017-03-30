var lengthOfLongestSubstring = require('../003-lengthOfLongestSubstring.js');

test('lengthOfLongestSubstring',function () {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  expect(lengthOfLongestSubstring('')).toBe(0);
});