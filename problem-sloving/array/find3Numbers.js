// JavaScript program to find a triplet using Hashing

// returns true if there is triplet
// with sum equal to 'sum' present
// in A[]. Also, prints the triplet
function find3Numbers(A, arr_size, sum) {
  // Fix the first element as A[i]
  for (let i = 0; i < arr_size - 2; i++) {
    let s = new Set();
    let curr_sum = sum - A[i];
    for (let j = i + 1; j < arr_size; j++) {
      if (s.has(curr_sum - A[j])) {
        document.write(
          "Triplet is " + A[i] + ", " + A[j] + ", " + (curr_sum - A[j]) + "<br>"
        );

        return true;
      }
      s.add(A[j]);
    }
  }

  return false;
}

/* Driver code */
let A = [1, 4, 45, 6, 10, 8];

let sum = 22;
let arr_size = A.length;
find3Numbers(A, arr_size, sum);
