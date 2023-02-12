// A JavaScript program to find a peak element
// using divide and conquer

// A binary search based function
// that returns index of a peak element
function findPeakUtil(arr, low, high, n) {
  let l = low;
  let r = high - 1;
  let mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);

    // first case if mid is the answer
    if (
      (mid == 0 || arr[mid - 1] <= arr[mid]) &&
      (mid == n - 1 || arr[mid + 1] <= arr[mid])
    )
      break;
    // change the right pointer to mid-1
    if (mid > 0 && arr[mid - 1] > arr[mid]) r = mid - 1;
    // change the left pointer to mid+1
    else l = mid + 1;
  }

  return mid;
}

// A wrapper over recursive function findPeakUtil()
function findPeak(arr, n) {
  return findPeakUtil(arr, 0, n, n);
}
// Driver Code
let arr = [1, 3, 2, 4, 20];
let n = arr.length;
console.log(findPeak(arr, n));

//SOLUTION 2
// A JavaScript program to find a peak element
// Find the peak element in the array

function findPeak(arr, n) {
  // first or last element is peak element
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;

  // check for every other element
  for (var i = 1; i < n - 1; i++) {
    // check if the neighbors are smaller
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
  }
}

// Driver Code
var arr2 = [1, 3, 20, 4, 1, 0];
var n2 = arr.length;
console.log("Index of a peak point is " + findPeak(arr, n));
