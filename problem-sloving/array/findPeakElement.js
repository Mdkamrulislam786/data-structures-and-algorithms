// A JavaScript program to find a peak element
// using divide and conquer

// A binary search based function
// that returns index of a peak element
function findPeakUtil(arr, low, high, n) {
  let l = low;
  let r = high - 1;
  let mid;

  while (l <= r) {
    // finding the mid index by right shifting
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
