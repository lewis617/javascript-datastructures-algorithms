var HashTable = require('./HashCollisionLinearProbing');

test('HashCollisionLinearProbing', function () {
  var hashTable = new HashTable();

  hashTable.put('zhangsan', 'zhangsan@email.com'); // 代码一
  hashTable.put('zhangsan12', 'zhangsan12@email.com'); // 代码二
  hashTable.put('zhangsan21', 'zhangsan21@email.com'); // 代码三
  hashTable.put('zhangsan30', 'zhangsan30@email.com'); // 代码四
  expect(hashTable.get('zhangsan')).toBe('zhangsan@email.com'); // 断言一
  expect(hashTable.get('zhangsan12')).toBe('zhangsan12@email.com'); // 断言二
  expect(hashTable.get('zhangsan21')).toBe('zhangsan21@email.com'); // 断言三
  expect(hashTable.get('zhangsan30')).toBe('zhangsan30@email.com'); // 断言四
  expect(hashTable.remove('zhangsan')).toBeTruthy(); // 断言五
  expect(hashTable.get('zhangsan')).toBe(undefined); // 断言六
  expect(hashTable.remove('zhangsan30')).toBeTruthy();  // 断言七
  expect(hashTable.remove('zhangsan21')).toBeTruthy(); // 断言八
  expect(hashTable.remove('zhangsan12')).toBeTruthy(); // 断言九
  expect(hashTable.remove('zhangsan12')).toBeFalsy(); // 断言十
});