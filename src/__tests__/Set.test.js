var Set = require('../Set');

test('Set', function () {
  var set = new Set();

  set.add(1);
  expect(set.has(1)).toBeTruthy();
  expect(set.size()).toBe(1);
  expect(set.values()).toEqual(['1']);

  set.add(2);
  expect(set.has(2)).toBeTruthy();
  expect(set.size()).toBe(2);
  expect(set.values()).toEqual(['1', '2']);

  set.remove(1);
  expect(set.values()).toEqual(['2']);

  var otherSet = new Set();

  otherSet.add(3);
  set.add(1);

  var unionSet = set.union(otherSet);
  expect(unionSet.values()).toEqual(['1', '2', '3']);

  otherSet.add(2);
  var intersectionSet = set.intersection(otherSet);
  expect(intersectionSet.values()).toEqual(['1', '2']);


  var differenceSet = set.difference(otherSet);
  expect(differenceSet.values()).toEqual(['1']);

  expect(set.subset(otherSet)).toBeFalsy();
  set.remove(1);
  expect(set.subset(otherSet)).toBeTruthy();


  set.clear();
  expect(set.values()).toEqual([]);

});