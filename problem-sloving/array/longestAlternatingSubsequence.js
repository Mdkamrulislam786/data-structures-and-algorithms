// Javascript program for above approach

// Function for finding
// longest alternating
// subsequence

function LAS(arr, n) {
  // "inc" and "dec" initialized as 1
  // as single element is still LAS
  let inc = 1;
  let dec = 1;

  // Iterate from second element
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      // "inc" changes if "dec"
      // changes
      inc = dec + 1;
    } else if (arr[i] < arr[i - 1]) {
      // "dec" changes if "inc"
      // changes
      dec = inc + 1;
    }
  }

  // Return the maximum length
  return Math.max(inc, dec);
}

let arr = [10, 22, 9, 33, 49, 50, 31, 60];
let n = arr.length;

// Function Call
console.log(LAS(arr, n));
