var findContentChildren = require('../455-assignCookies');

test('assignCookies', function () {
  expect(findContentChildren([1, 3, 5, 4, 2], [1, 1])).toBe(1);
  expect(findContentChildren([10, 9, 8, 7, 6], [7, 6, 5])).toBe(2);
});