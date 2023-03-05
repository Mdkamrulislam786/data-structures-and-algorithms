// A O(n) program to sort
// an input array in wave form

// A utility method to swap two numbers.
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// This function sorts arr[0..n-1]
// in wave form, i.e.,
// arr[0] >= arr[1] <= arr[2] >=
// arr[3] <= arr[4]....
function sortInWave(arr, n) {
  // Traverse all even elements
  for (let i = 0; i < n; i += 2) {
    // If current even element
    // is smaller than previous
    if (i > 0 && arr[i - 1] > arr[i]) swap(arr, i - 1, i);

    // If current even element
    // is smaller than next
    if (i < n - 1 && arr[i] < arr[i + 1]) swap(arr, i, i + 1);
  }
}

// driver code
let arr = [10, 90, 49, 2, 1, 5, 23];
let n = arr.length;
sortInWave(arr, n);
for (let i = 0; i < n; i++) console.log(arr[i] + " ");
