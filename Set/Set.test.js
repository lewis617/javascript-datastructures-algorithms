var Set = require('./Set');

test('Set', function () {
  var set = new Set();

  expect(set.add(1)).toBeTruthy();
  expect(set.add(1)).toBeFalsy();
  expect(set.add(2)).toBeTruthy();

  expect(set.has(1)).toBeTruthy();
  expect(set.has(3)).toBeFalsy();

  expect(set.remove(1)).toBeTruthy();
  expect(set.remove(1)).toBeFalsy();

  expect(set.size()).toBe(1);
  expect(set.values()).toEqual(['2']);

  var otherSet = new Set();
  otherSet.add(3);
  expect(otherSet.values()).toEqual(['3']);

  set.add(1);
  expect(set.values()).toEqual(['1', '2']);

  var unionSet = set.union(otherSet);
  expect(unionSet.values()).toEqual(['1', '2', '3']);

  otherSet.add(2);
  expect(otherSet.values()).toEqual(['2', '3']);

  var intersectionSet = set.intersection(otherSet);
  expect(intersectionSet.values()).toEqual(['2']);

  var differenceSet = set.difference(otherSet);
  expect(differenceSet.values()).toEqual(['1']);

  expect(set.subset(otherSet)).toBeFalsy();
  set.remove(1);
  expect(set.subset(otherSet)).toBeTruthy();
  set.add(1);
  set.add(3);
  expect(set.subset(otherSet)).toBeFalsy();


  set.clear();
  expect(set.values()).toEqual([]);

});