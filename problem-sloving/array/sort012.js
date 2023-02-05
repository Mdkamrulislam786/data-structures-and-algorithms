// Javascript program to sort an array of 0, 1 and 2

// Sort the input array, the array is assumed to
// have values in {0, 1, 2}
function sort012(a, arr_size) {
  let lo = 0;
  let hi = arr_size - 1;
  let mid = 0;
  let temp = 0;
  // Iterate till all the elements
  // are sorted
  while (mid <= hi) {
    // If the element is 0
    if (a[mid] == 0) {
      temp = a[lo];
      a[lo] = a[mid];
      a[mid] = temp;
      lo++;
      mid++;
    }
    // If the element is 1
    else if (a[mid] == 1) {
      mid++;
    }
    // If the element is 2
    else {
      temp = a[mid];
      a[mid] = a[hi];
      a[hi] = temp;
      hi--;
    }
  }
}

/* Utility function to print array arr[] */
function printArray(arr, arr_size) {
  let i;
  for (i = 0; i < arr_size; i++) {
    document.write(arr[i] + " ");
  }
  document.write("<br>");
}

/*Driver function to check for above functions*/
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let arr_size = arr.length;
sort012(arr, arr_size);
printArray(arr, arr_size);

/*
array is divided into four sections: 
arr[1] to arr[low – 1]
arr[low] to arr[mid – 1]
arr[mid] to arr[high – 1]
arr[high] to arr[n]
*/

//SOLUTION 2

// Function to sort the array of 0s, 1s and 2s
function sortArr2(arr, n) {
  let i,
    cnt0 = 0,
    cnt1 = 0,
    cnt2 = 0;

  // Count the number of 0s, 1s and 2s in the array
  for (i = 0; i < n; i++) {
    switch (arr[i]) {
      case 0:
        cnt0++;
        break;
      case 1:
        cnt1++;
        break;
      case 2:
        cnt2++;
        break;
    }
  }

  // Update the array
  i = 0;

  // Store all the 0s in the beginning
  while (cnt0 > 0) {
    arr[i++] = 0;
    cnt0--;
  }

  // Then all the 1s
  while (cnt1 > 0) {
    arr[i++] = 1;
    cnt1--;
  }

  // Finally all the 2s
  while (cnt2 > 0) {
    arr[i++] = 2;
    cnt2--;
  }

  // Print the sorted array
  printArray(arr, n);
}

// Driver program to test above function

let arr2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
let n2 = arr.length;

// Function calling
sortArr2(arr2, n2);

// This code is contributed by jana_sayantan.
