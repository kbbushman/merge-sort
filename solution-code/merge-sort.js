function mergeSort(arr) {
  if (arr.constructor !== Array) { // ensure the argument passed in is an array
    return "please pass in an array instead";
  }
  // exit condition
  if (arr.length <= 1) { // nothing to be sorted
    return arr;
  }
  var middle = parseInt(arr.length / 2); // determine the mid point, round down if a float
  var left = arr.slice(0, middle); // create an array of the left half
  var right = arr.slice(middle, arr.length); // create an array of right half
  // recursive condition
  return merge(mergeSort(left), mergeSort(right)); // sort the left & right arrays and merge them back together
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) { // while BOTH arrays have elements in them
    if (left[0] <= right[0]) { // if the left array first element is less than the right array first element
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) { // if left is the only array with elements, push them all in
    result.push(left.shift());
  }
  while (right.length) {  // if right is the only array with elements, push them all in
    result.push(right.shift());
  }
  return result; // return merged array
}
