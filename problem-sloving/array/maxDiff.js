// Javascript code to find Maximum difference
// between two elements such that larger
// element appears after the smaller number

// The function assumes that there
// are at least two elements in array.
// The function returns a negative
// value if the array is sorted in
// decreasing order.Returns 0 if
// elements are equal

function maxDiff(arr, arr_size) {
  let max_diff = arr[1] - arr[0];
  let min_element = arr[0];
  let i;
  for (i = 1; i < arr_size; i++) {
    if (arr[i] - min_element > max_diff) max_diff = arr[i] - min_element;
    if (arr[i] < min_element) min_element = arr[i];
  }
  return max_diff;
}

let arr = [1, 2, 90, 10, 110];
let size = arr.length;
console.log("Maximum difference is " + maxDiff(arr, size));

//Solution 2
// Javascript program to find Maximum difference
// between two elements such that larger
// element appears after the smaller number

/* The function assumes that there are
  at least two elements in array. The
  function returns a negative value if the
  array is sorted in decreasing order and
  returns 0 if elements are equal */
function maxDiff2(arr, n) {
  // Initialize Result
  let maxDiff = -1;

  // Initialize max element from right side
  let maxRight = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxRight) maxRight = arr[i];
    else {
      let diff = maxRight - arr[i];
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}

let arr2 = [1, 2, 90, 10, 110];
let n = arr2.length;
console.log("Maximum difference is " + maxDiff2(arr, size));
