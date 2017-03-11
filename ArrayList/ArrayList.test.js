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

  expect(array.NSum(2, 6)).toEqual([[1, 5], [2, 4]]);
  expect(array.NSum(3, 7)).toEqual([[1, 2, 4]]);
  expect(array.NSum(4, 14)).toEqual([[2, 3, 4, 5]]);

  function createRobArray() {
    var array = new ArrayList();
    array.insert(2);
    array.insert(0);
    array.insert(0);
    array.insert(4);
    array.insert(5);
    return array;
  }

  array = createRobArray();
  expect(array.simpleRob()).toBe(7);
  expect(array.circleRob()).toBe(6);

  function createOneLengthRobArray() {
    var array = new ArrayList();
    array.insert(2);
    return array;
  }

  array = createOneLengthRobArray();
  expect(array.simpleRob()).toBe(2);
  expect(array.circleRob()).toBe(2);

  array = createNonSortedArray();
  expect(array.findContentChildren([1, 1])).toBe(1);
  expect(array.findContentChildren([1, 2, 3])).toBe(3);
});