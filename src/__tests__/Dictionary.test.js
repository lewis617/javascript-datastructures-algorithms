var Dictionary = require('../Dictionary');

test('Dictionary', function () {
  var dictionary = new Dictionary();

  dictionary.set('Gandalf', 'gandalf@email.com');
  dictionary.set('John', 'johnsnow@email.com');
  dictionary.set('Tyrion', 'tyrion@email.com');

  expect(dictionary.has('Gandalf')).toBeTruthy();
  expect(dictionary.get('John')).toBe('johnsnow@email.com');
  expect(dictionary.values()).toEqual(['gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com']);

  expect(dictionary.remove('Gandalf')).toBeTruthy();
  expect(dictionary.remove('Gandalf')).toBeFalsy();
  expect(dictionary.values()).toEqual(['johnsnow@email.com', 'tyrion@email.com']);
  expect(dictionary.getItems()).toEqual({
    'John': 'johnsnow@email.com',
    'Tyrion': 'tyrion@email.com'
  });
});