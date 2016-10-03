function mergeSort(arr) {
  if (arr.constructor !== Array) { // ensure the argument passed in is an array
    return "please pass in an array instead";
  }
  if (arr.length <= 1) { // nothing to be sorted
    return arr; // exit condition
  }
  var middle = parseInt(arr.length / 2); // determine the mid point, round down if a float
  var left = arr.slice(0, middle); // create an array of the left half
  var right = arr.slice(middle, arr.length); // create an array of right half
  return merge(mergeSort(left), mergeSort(right)); // recursively sort each half, eventually merging them back together
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
  // tack on remaining items in potentially still populated collection
  return result.concat(left, right);
}
