var HashCollisionLinearProbing = require('../HashCollisionLinearProbing');

test('HashCollisionLinearProbing', function () {
  var hashCollisionLinearProbing = new HashCollisionLinearProbing();
  hashCollisionLinearProbing.put('Gandalf', 'gandalf@email.com');
  hashCollisionLinearProbing.put('John', 'johnsnow@email.com');
  hashCollisionLinearProbing.put('Tyrion', 'tyrion@email.com');
  expect(hashCollisionLinearProbing.get('Gandalf')).toBe('gandalf@email.com');
  hashCollisionLinearProbing.remove('Gandalf');
  expect(hashCollisionLinearProbing.get('Gandalf')).toBe(undefined);
});