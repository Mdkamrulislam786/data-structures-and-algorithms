// JavaScript program to find Maximum Product Subarray

/* Returns the product
of max product subarray. */
function maxSubarrayProduct(arr, n) {
  // max positive product
  // ending at the current position
  let max_ending_here = arr[0];

  // min negative product ending
  // at the current position
  let min_ending_here = arr[0];

  // Initialize overall max product
  let max_so_far = arr[0];

  /* Traverse through the array.
      the maximum product subarray ending at an index
      will be the maximum of the element itself,
      the product of element and max product ending previously
      and the min product ending previously. */
  for (let i = 1; i < n; i++) {
    let temp = Math.max(
      Math.max(arr[i], arr[i] * max_ending_here),
      arr[i] * min_ending_here
    );
    min_ending_here = Math.min(
      Math.min(arr[i], arr[i] * max_ending_here),
      arr[i] * min_ending_here
    );
    max_ending_here = temp;
    max_so_far = Math.max(max_so_far, max_ending_here);
  }
  return max_so_far;
}

// Driver code
let arr = [1, -2, -3, 0, 7, -8, -2];
let n = arr.length;
console.log("Maximum Sub array product is " + maxSubarrayProduct(arr, n));
