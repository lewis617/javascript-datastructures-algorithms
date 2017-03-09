function ArrayList() {

  var array = [];

  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.toString();
  };

  var swap = function (index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  this.bubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  this.selectionSort = function () {
    var length = array.length,
      indexMin;

    for (var i = 0; i < length - 1; i++) {
      indexMin = i;
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

  this.insertionSort = function () {
    var length = array.length,
      j, temp;
    for (var i = 1; i < length; i++) {
      temp = array[i];
      j = i;
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  var mergeSortRec = function (array) {
    var merge = function (left, right) {
      var final = [];
      while (left.length && right.length)
        final.push(left[0] <= right[0] ? left.shift() : right.shift());
      return final.concat(left.concat(right));
    };

    var length = array.length;
    if (length === 1) {
      return array;
    }
    var mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  this.mergeSort = function () {
    array = mergeSortRec(array);
  };

  var quick = function (array) {
    var length = array.length;
    if (length <= 1)
      return array.slice(0);
    var left = [];
    var right = [];
    var mid = [array[0]];
    for (var i = 1; i < length; i++) {
      if (array[i] < mid[0])
        left.push(array[i]);
      else
        right.push(array[i]);
    }
    return quick(left).concat(mid.concat(quick(right)));
  };

  this.quickSort = function () {
    array = quick(array);
  };

  this.sequentialSearch = function (item) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return i;
      }
    }
    return -1;
  };

  this.binarySearch = function (item) {
    this.quickSort();

    var low = 0,
      high = array.length - 1,
      mid, element;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = array[mid];
      if (element < item) {
        low = mid + 1;
      } else if (element > item) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };

  var findNSum = function (nums, M, N, result, results) {
    if (nums.length < N || M < nums[0] * N || M > nums[-1] * N) {
      return;
    }
    if (N === 2) {
      var l = 0,
        r = nums.length - 1;
      while (l < r) {
        var s = nums[l] + nums[r];
        if (s === M) {
          results.push(result.concat([nums[l], nums[r]]));
          l++;
        } else if (s < M) {
          l++;
        } else {
          r--;
        }
      }
    } else {
      for (var i = 0; i < nums.length - N + 1; i++) {
        findNSum(nums.slice(i + 1), M - nums[i], N - 1, result.concat([nums[i]]), results);
      }
    }
  };

  this.NSum = function (N, M) {
    this.quickSort();

    var results = [];
    findNSum(array, M, N, [], results);
    return results;
  };
}

module.exports = ArrayList;