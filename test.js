// Javascript program to find the missing
// and repeating element
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Function to find the repeating and missing element
function getTwoElements(arr, n) {
  let repeating = 0;
  let missing = 0;

  let i = 0;

  // Traverse on the array
  while (i < n) {
    // If the element is on its correct position
    if (arr[i] == arr[arr[i] - 1]) {
      i++;
    }
    // If it is not at its correct position then
    // place it to its correct position.
    else {
      swap(arr, i, arr[i] - 1);
    }
  }

  // Find repeating and missing element.
  for (i = 0; i < n; i++) {
    // If any element is not in its correct position
    if (arr[i] != i + 1) {
      repeating = arr[i];
      missing = i + 1;
      break;
    }
  }

  // Print answer
  console.log("Repeating: " + repeating + " Missing: " + missing);
}

let arr = [5, 3, 2, 3, 4];
let n = arr.length;
getTwoElements(arr, n);
