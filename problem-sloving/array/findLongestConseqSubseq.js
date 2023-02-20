// JavaScript program to find longest
// contiguous subsequence

// Returns length of the longest
// contiguous subsequence

function findLongestConseqSubseq(arr, n) {
  let ans = 0,
    count = 0;

  // sort the array
  arr.sort(function (a, b) {
    return a - b;
  });

  var v = [];
  v.push(arr[0]);

  //insert repeated elements only once in the vector
  for (let i = 1; i < n; i++) {
    if (arr[i] != arr[i - 1]) v.push(arr[i]);
  }

  // find the maximum length
  // by traversing the array
  for (let i = 0; i < v.length; i++) {
    // Check if the current element is equal
    // to previous element +1
    if (i > 0 && v[i] == v[i - 1] + 1) count++;
    // reset the count
    else count = 1;

    // update the maximum
    ans = Math.max(ans, count);
  }

  return ans;
}

// Driver code

let arr = [1, 2, 2, 3];
let n = arr.length;
console.log(
  "Length of the Longest contiguous subsequence is " +
    findLongestConseqSubseq(arr, n)
);

//SOL 2
// Javascript program to find longest
// contiguous subsequence

// Returns length of the longest
// contiguous subsequence
function findLongestConseqSubseq2(arr, n) {
  let S = new Set();
  let ans = 0;

  // Hash all the array elements
  for (let i = 0; i < n; i++) S.add(arr[i]);

  // check each possible sequence from
  // the start then update optimal length
  for (let i = 0; i < n; i++) {
    // if current element is the starting
    // element of a sequence
    if (!S.has(arr[i] - 1)) {
      // Then check for next elements
      // in the sequence
      let j = arr[i];
      while (S.has(j)) j++;

      // update optimal length if
      // this length is more
      ans = Math.max(ans, j - arr[i]);
    }
  }
  return ans;
}

// Driver code
let arr2 = [1, 9, 3, 10, 4, 20, 2];
let n2 = arr.length;
console.log(
  "Length of the Longest contiguous subsequence is " +
    findLongestConseqSubseq2(arr2, n2)
);
