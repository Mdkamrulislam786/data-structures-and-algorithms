function findMinMax(arr, n) {
  let max = 0;
  let min = arr[0];

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(min, max);

  return { min, max };
}
const result = findMinMax([3, 2, 1, 56, 10000, 167], 6);
console.log(result);

// Time complexity: 0(n)
// Space complexity: 0(1)

