var Dictionary = require('./Dictionary');

test('Dictionary', function () {
  var dictionary = new Dictionary();

  dictionary.set('张三', 'zhangsan@email.com');
  dictionary.set('李四', 'lisi@email.com');

  expect(dictionary.has('张三')).toBeTruthy();
  expect(dictionary.get('李四')).toBe('lisi@email.com');
  expect(dictionary.get('王五')).toBe(undefined);

  expect(dictionary.remove('张三')).toBeTruthy();
  expect(dictionary.remove('张三')).toBeFalsy();

  dictionary.set('王五', 'wangwu@email.com');
  expect(dictionary.values()).toEqual(['lisi@email.com', 'wangwu@email.com']);
  expect(dictionary.getItems()).toEqual({
    '李四': 'lisi@email.com',
    '王五': 'wangwu@email.com'
  });
});