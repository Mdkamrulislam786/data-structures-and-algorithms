function maxSum(arr, n) {
  // Compute sum of all array elements
  let cum_sum = 0;
  for (let i = 0; i < n; i++) cum_sum += arr[i];

  // Compute sum of i*arr[i] for initial
  // configuration.
  let curr_val = 0;
  for (let i = 0; i < n; i++) curr_val += i * arr[i];

  // Initialize result
  let res = curr_val;
  // Compute values for other iterations
  for (let i = 1; i < n; i++) {
    // Compute next value using previous
    // value in O(1) time

    let next_val = curr_val - (cum_sum - arr[i - 1]) + arr[i - 1] * (n - 1);

    // Update current value
    curr_val = next_val;

    // Update result if required
    res = Math.max(res, next_val);
  }

  return res;
}

// Driver code
let arr = [8, 3, 1, 2];
let n = arr.length;
console.log(maxSum(arr, n));
