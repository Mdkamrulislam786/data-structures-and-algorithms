// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

function subArraySum(arr, n, sum) {
  let curr_sum;
  for (let i = 0; i < n; i++) {
    curr_sum = arr[i];
    for (let j = i + 1; j < n; j++) {
      if (curr_sum === sum) {
        console.log(i, j - 1);
        break;
      }
      curr_sum = curr_sum + arr[j];
    }
    console.log(curr_sum);
  }
}
let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
subArraySum(arr, n, sum);
