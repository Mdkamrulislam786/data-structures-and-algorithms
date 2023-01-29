// Javascript program to find maximum sum path

// Utility function to find maximum of two integers
function max(x, y) {
  return x > y ? x : y;
}

// This function returns the sum of elements
// on maximum path from beginning to end
function maxPathSum(ar1, ar2, m, n) {
  // Initialize indexes for ar1[] and ar2[]
  let i = 0,
    j = 0;

  // Initialize result and current sum
  // through ar1[] and ar2[].
  let result = 0,
    sum1 = 0,
    sum2 = 0;

  // Below3 loops are similar to
  // merge in merge sort
  while (i < m && j < n) {
    // Add elements of ar1[] to sum1
    if (ar1[i] < ar2[j]) sum1 += ar1[i++];
    // Add elements of ar2[] to sum2
    else if (ar1[i] > ar2[j]) sum2 += ar2[j++];
    // We reached a common point
    else {
      // Take the maximum of two sums and add to
      // result
      //Also add the common element of array, once
      result += max(sum1, sum2) + ar1[i];

      // Update sum1 and sum2 for elements after this
      // intersection point
      sum1 = 0;
      sum2 = 0;

      //update i and j to move to next element of each array
      i++;
      j++;
    }
  }

  // Add remaining elements of ar1[]
  while (i < m) sum1 += ar1[i++];

  // Add remaining elements of ar2[]
  while (j < n) sum2 += ar2[j++];

  // Add maximum of two sums of
  // remaining elements
  result += max(sum1, sum2);

  return result;
}

// Driver code
let ar1 = [2, 3, 7, 10, 12, 15, 30, 34];
let ar2 = [1, 5, 7, 8, 10, 15, 16, 19];
let m = ar1.length;
let n = ar2.length;

// Function call
console.log(maxPathSum(ar1, ar2, m, n));