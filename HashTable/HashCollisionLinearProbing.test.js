var HashCollisionLinearProbing = require('./HashCollisionLinearProbing');

test('HashCollisionLinearProbing', function () {
  var hashCollisionLinearProbing = new HashCollisionLinearProbing();
  hashCollisionLinearProbing.put('Gandalf', 'gandalf@email.com');
  hashCollisionLinearProbing.put('Gandalf12', 'gandalf12@email.com');
  hashCollisionLinearProbing.put('Gandalf21', 'gandalf21@email.com');
  hashCollisionLinearProbing.put('Gandalf30', 'gandalf30@email.com');
  expect(hashCollisionLinearProbing.get('Gandalf')).toBe('gandalf@email.com');
  expect(hashCollisionLinearProbing.get('Gandalf12')).toBe('gandalf12@email.com');
  expect(hashCollisionLinearProbing.get('Gandalf21')).toBe('gandalf21@email.com');
  expect(hashCollisionLinearProbing.get('Gandalf30')).toBe('gandalf30@email.com');
  expect(hashCollisionLinearProbing.remove('Gandalf')).toBeTruthy();
  expect(hashCollisionLinearProbing.get('Gandalf')).toBe(undefined);
  expect(hashCollisionLinearProbing.remove('Gandalf30')).toBeTruthy();
  expect(hashCollisionLinearProbing.get('Gandalf30')).toBe(undefined);
  expect(hashCollisionLinearProbing.remove('Gandalf21')).toBeTruthy();
  expect(hashCollisionLinearProbing.get('Gandalf21')).toBe(undefined);
  expect(hashCollisionLinearProbing.remove('Gandalf12')).toBeTruthy();
  expect(hashCollisionLinearProbing.get('Gandalf12')).toBe(undefined);
  expect(hashCollisionLinearProbing.remove('Gandalf20')).toBeFalsy();
});