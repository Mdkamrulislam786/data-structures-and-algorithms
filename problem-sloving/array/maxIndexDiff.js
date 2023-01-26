// Javascript program to find the maximum
// j – i such that arr[j] > arr[i]

// Utility Functions to get max
// and minimum of two integers
function max(x, y) {
  return x > y ? x : y;
}

function min(x, y) {
  return x < y ? x : y;
}

// For a given array arr[], returns
// the maximum j-i such thatarr[j] > arr[i]
function maxIndexDiff(arr, n) {
  let maxDiff;
  let i, j;

  let RMax = new Array(n);
  let LMin = new Array(n);

  // Construct LMin[] such that LMin[i]
  // stores the minimum value
  // from (arr[0], arr[1], ... arr[i])
  LMin[0] = arr[0];
  for (i = 1; i < n; ++i) LMin[i] = min(arr[i], LMin[i - 1]);
  console.log("LMin", LMin);

  // Construct RMax[] such that
  // RMax[j] stores the maximum value
  // from (arr[j], arr[j+1], ..arr[n-1])
  RMax[n - 1] = arr[n - 1];
  for (j = n - 2; j >= 0; --j) RMax[j] = max(arr[j], RMax[j + 1]);
  console.log("RMax", RMax);
  // Traverse both arrays from left
  // to right to find optimum j - i
  // This process is similar to merge()
  // of MergeSort
  i = 0;
  j = 0;
  maxDiff = -1;
  while (j < n && i < n) {
    if (LMin[i] <= RMax[j]) {
      maxDiff = max(maxDiff, j - i);
      j = j + 1;
    } else i = i + 1;
  }

  return maxDiff;
}

let arr = [9, 2, 3, 4, 5, 6, 7, 8, 18, 0];
let n = arr.length;
let maxDiff = maxIndexDiff(arr, n);
console.log(maxDiff);
