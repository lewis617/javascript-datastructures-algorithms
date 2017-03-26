var ArrayList = require('./ArrayList');

function createNonSortedArray() {
  var array = new ArrayList();
  array.insert(1);
  array.insert(3);
  array.insert(5);
  array.insert(4);
  array.insert(2);
  return array;
}

test('ArrayList', function () {
  var array = createNonSortedArray();
  expect(array.toString()).toBe('1,3,5,4,2');
  array.bubbleSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray();
  expect(array.toString()).toBe('1,3,5,4,2');
  array.selectionSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray();
  expect(array.toString()).toBe('1,3,5,4,2');
  array.insertionSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray();
  expect(array.toString()).toBe('1,3,5,4,2');
  array.mergeSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  array = createNonSortedArray();
  expect(array.toString()).toBe('1,3,5,4,2');
  array.quickSort();
  expect(array.toString()).toBe('1,2,3,4,5');

  expect(array.sequentialSearch(3)).toBe(2);
  expect(array.sequentialSearch(6)).toBe(-1);
  expect(array.binarySearch(3)).toBe(2);
  expect(array.binarySearch(6)).toBe(-1);
  expect(array.binarySearch(2)).toBe(1);
});