var ArrayList = require('../ArrayList');

function createNonSortedArray(size) {
  var array = new ArrayList();
  for (var i = 0; i < size; i++) {
    array.insert(size - i);
  }
  return array;
}

test('ArrayList', function () {
  var array = createNonSortedArray(5);
  expect(array.toString()).toBe('5,4,3,2,1');
  array.bubbleSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray(5);
  expect(array.toString()).toBe('5,4,3,2,1');
  array.modifiedBubbleSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray(5);
  expect(array.toString()).toBe('5,4,3,2,1');
  array.selectionSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray(5);
  expect(array.toString()).toBe('5,4,3,2,1');
  array.insertionSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = new ArrayList();
  array.insert(1);
  array.insert(2);
  array.insert(5);
  array.insert(4);
  array.insert(3);
  expect(array.toString()).toBe('1,2,5,4,3');
  array.mergeSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray(5);
  expect(array.toString()).toBe('5,4,3,2,1');
  array.quickSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  expect(array.sequentialSearch(3)).toBe(2);
  expect(array.sequentialSearch(6)).toBe(-1);
  expect(array.binarySearch(3)).toBe(2);
  expect(array.binarySearch(6)).toBe(-1);
  expect(array.binarySearch(2)).toBe(1);
});