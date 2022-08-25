function firstNonRepeating(arr, n) {
  // Loop for checking each element
  for (let i = 0; i < n; i++) {
    let j;
    // Checking if ith element is present in array
    for (j = 0; j < n; j++) if (i != j && arr[i] == arr[j]) break;
    // if ith element is not present in array
    // except at ith index then return element
    console.log(i, j);
    if (j == n) return arr[i];
  }
  return -1;
}

// Driver code

function firstNonRepeating2(arr, n) {
  // Insert all array elements in hash
  // table

  const m = new Map();
  for (var i = 0; i < n; i++) {
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }
  // Traverse array again and return
  // first element with count 1.
  for (var i = 0; i < n; i++) if (m.get(arr[i]) == 1) return arr[i];
  return -1;
}

let arr = [9, 4, 9, 6, 7, 4];
let n = arr.length;
console.log(firstNonRepeating(arr, n));
