var rob = require('../213-rob2');

test('rob2', function () {
  expect(rob([2])).toBe(2);
  expect(rob([2, 0, 0, 4, 5])).toBe(6);
});