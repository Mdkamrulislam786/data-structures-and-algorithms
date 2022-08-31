function maxSubarraySum(arr, N) {
  let max = arr[0];
  let currSum = 0;

  for (let i = 0; i < N; i++) {
    const element = arr[i];
    currSum += element;
    if (currSum > max) max = currSum;
    if (currSum < 0) currSum = 0;
  }

  return max;
}

const arr = [1, 2, 3, -2, 5];
const N = arr.length;
console.log(maxSubarraySum(arr, N));
