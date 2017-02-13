var HashCollisionSeparateChaining = require('../HashCollisionSeparateChaining');

test('HashCollisionSeparateChaining', function () {
  var hashCollisionSeparateChaining = new HashCollisionSeparateChaining();

  hashCollisionSeparateChaining.put('Gandalf', 'gandalf@email.com');
  hashCollisionSeparateChaining.put('Gandalf12', 'gandalf12@email.com');
  hashCollisionSeparateChaining.put('Gandalf21', 'gandalf21@email.com');
  hashCollisionSeparateChaining.put('Gandalf30', 'gandalf30@email.com');
  expect(hashCollisionSeparateChaining.get('Gandalf')).toBe('gandalf@email.com');
  expect(hashCollisionSeparateChaining.get('Gandalf12')).toBe('gandalf12@email.com');
  expect(hashCollisionSeparateChaining.get('Gandalf21')).toBe('gandalf21@email.com');
  expect(hashCollisionSeparateChaining.get('Gandalf30')).toBe('gandalf30@email.com');
  expect(hashCollisionSeparateChaining.remove('Gandalf')).toBeTruthy();
  expect(hashCollisionSeparateChaining.get('Gandalf')).toBe(undefined);
  expect(hashCollisionSeparateChaining.remove('Gandalf21')).toBeTruthy();
  expect(hashCollisionSeparateChaining.get('Gandalf21')).toBe(undefined);
  expect(hashCollisionSeparateChaining.remove('Gandalf12')).toBeTruthy();
  expect(hashCollisionSeparateChaining.get('Gandalf12')).toBe(undefined);
  expect(hashCollisionSeparateChaining.remove('Gandalf30')).toBeTruthy();
  expect(hashCollisionSeparateChaining.get('Gandalf30')).toBe(undefined);
  expect(hashCollisionSeparateChaining.remove('Gandalf30')).toBeFalsy();
  expect(hashCollisionSeparateChaining.get('Gandalf30')).toBe(undefined);
  expect(hashCollisionSeparateChaining.remove('Gandalf20')).toBeFalsy();
  expect(hashCollisionSeparateChaining.get('Gandalf20')).toBe(undefined);
});