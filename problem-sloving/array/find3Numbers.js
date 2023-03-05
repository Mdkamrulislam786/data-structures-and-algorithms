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
        console.log(
          "Triplet is " + A[i] + ", " + A[j] + ", " + (curr_sum - A[j]) + ""
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

//SOLUTION 2

// Javascript program to find a triplet

// returns true if there is triplet with sum equal
// to 'sum' present in A[]. Also, prints the triplet
function find3Numbers2(A, arr_size, sum) {
  let l, r;

  /* Sort the elements */
  A.sort((a, b) => a - b);

  /* Now fix the first element one
	by one and find the
	other two elements */
  for (let i = 0; i < arr_size - 2; i++) {
    // To find the other two
    // elements, start two index
    // variables from two corners of
    // the array and move
    // them toward each other

    // index of the first element in the
    l = i + 1;
    // remaining elements
    // index of the last element
    r = arr_size - 1;
    while (l < r) {
      if (A[i] + A[l] + A[r] == sum) {
        document.write("Triplet is " + A[i] + ", " + A[l] + ", " + A[r]);
        return true;
      } else if (A[i] + A[l] + A[r] < sum) l++;
      // A[i] + A[l] + A[r] > sum
      else r--;
    }
  }

  // If we reach here, then no triplet was found
  return false;
}

/* Driver program to test above function */

let A2 = [1, 4, 45, 6, 10, 8];
let sum2 = 22;
let arr_size2 = A2.length;

find3Numbers2(A2, arr_size2, sum2);
