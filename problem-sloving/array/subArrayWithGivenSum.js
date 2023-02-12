/* Returns true if the there is
a subarray of arr[] with sum equal to
	'sum' otherwise returns false.
Also, prints the result */

function subArraySum(arr, n, sum) {
  let currentSum = arr[0],
    start = 0,
    i;

  // Pick a starting point
  for (i = 1; i <= n; i++) {
    // If currentSum exceeds the sum,
    // then remove the starting elements
    while (currentSum > sum && start < i - 1) {
      currentSum -= arr[start];
      start++;
    }

    // If currentSum becomes equal to sum,
    // then return true
    if (currentSum == sum) {
      let p = i - 1;
      console.log("Sum found between indexes " + start + " and " + p + "<br>");
      return 1;
    }

    // Add this element to currentSum
    if (i < n) currentSum += +arr[i];
  }

  console.log("No subarray found");
  return 0;
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
subArraySum(arr, n, sum);
