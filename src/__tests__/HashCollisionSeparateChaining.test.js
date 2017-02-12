var HashCollisionSeparateChaining = require('../HashCollisionSeparateChaining');

test('HashCollisionSeparateChaining', function () {
  var hashCollisionSeparateChaining = new HashCollisionSeparateChaining();

  hashCollisionSeparateChaining.put('Gandalf', 'gandalf@email.com');
  hashCollisionSeparateChaining.put('John', 'johnsnow@email.com');
  hashCollisionSeparateChaining.put('Tyrion', 'tyrion@email.com');
  expect(hashCollisionSeparateChaining.get('Gandalf')).toBe('gandalf@email.com');
  hashCollisionSeparateChaining.remove('Gandalf');
  expect(hashCollisionSeparateChaining.get('Gandalf')).toBe(undefined);
});