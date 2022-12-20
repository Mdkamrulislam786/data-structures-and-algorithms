function firstMissingPositive(arr, n) {
  // Check if 1 is present in array or not
  for (let i = 0; i < n; i++) {
    // Loop to check boundary
    // condition and for swapping
    // ingnore elements greater than n and less than 1 , Then do swap(sorting kind of)
    while (arr[i] >= 1 && arr[i] <= n && arr[i] != arr[arr[i] - 1]) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
    }
  }

  // Finding which index has value less than n
  for (let i = 0; i < n; i++) if (arr[i] != i + 1) return i + 1;

  // If array has values from 1 to n
  return n + 1;
}

// Driver Code
let arr = [1, 3, 11, 7, -4];
let n = arr.length;
let ans = firstMissingPositive(arr, n);
console.log(ans);
