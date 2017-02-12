var HashTable = require('../HashTable');

test('HashTable',function () {
  var hashTable = new HashTable();

  hashTable.put('Gandalf', 'gandalf@email.com');
  hashTable.put('John', 'johnsnow@email.com');
  hashTable.put('Tyrion', 'tyrion@email.com');

  expect(hashTable.get('Gandalf')).toBe('gandalf@email.com');
  expect(hashTable.get('Loiane')).toBe(undefined);
});