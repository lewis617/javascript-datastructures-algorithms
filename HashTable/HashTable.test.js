var HashTable = require('./HashTable');

test('HashTable',function () {
  var hashTable = new HashTable();

  hashTable.put('zhangsan', 'zhangsan@email.com');
  hashTable.put('lisi', 'lisi@email.com');

  expect(hashTable.get('zhangsan')).toBe('zhangsan@email.com');
  expect(hashTable.get('lisi')).toBe('lisi@email.com');

  hashTable.remove('zhangsan');
  expect(hashTable.get('zhangsan')).toBe(undefined);

});