var rob2 = require('../rob2');

test('rob2', function () {
  expect(rob2([2])).toBe(2);
  expect(rob2([2, 0, 0, 4, 5])).toBe(6);
});