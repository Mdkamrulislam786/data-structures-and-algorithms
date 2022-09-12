// Program to find minimum number of platforms
// required on a railway station

function max(a, b) {
  if (a == b) return a;
  else {
    if (a > b) return a;
    else return b;
  }
}

// Returns minimum number of platforms required
function findPlatform(arr, dep, n) {
  // plat_needed indicates number of platforms
  // needed at a time
  var plat_needed = 1,
    result = 1;
  var i = 1,
    j = 0;

  // run a nested loop to find overlap
  for (var i = 0; i < n; i++) {
    // minimum platform
    plat_needed = 1;

    for (var j = 0; j < n; j++) {
      // check for overlap
      if (i != j) if (arr[i] >= arr[j] && dep[j] >= arr[i]) plat_needed++;
    }

    // update result
    result = max(result, plat_needed);
  }

  return result;
}

var arr = [100, 300, 500];
var dep = [900, 400, 600];
var n = 3;
console.log(
  "Minimum Number of Platforms Required = " + findPlatform(arr, dep, n)
);

//SOL 2
function findPlatform2(arr, dep, n) {
  // Sort arrival and
  // departure arrays
  arr = arr.sort((a, b) => a - b);
  dep = dep.sort((a, b) => a - b);

  // plat_needed indicates
  // number of platforms
  // needed at a time
  let plat_needed = 1;
  let result = 1;
  let i = 1;
  let j = 0;

  // Similar to merge in
  // merge sort to process
  // all events in sorted order
  while (i < n && j < n) {
    // If next event in sorted
    // order is arrival, increment
    // count of platforms needed
    if (arr[i] <= dep[j]) {
      plat_needed++;
      i++;
    }

    // Else decrement count
    // of platforms needed
    else if (arr[i] > dep[j]) {
      plat_needed--;
      j++;
    }

    // Update result if needed
    if (plat_needed > result) result = plat_needed;
  }

  return result;
}

// Driver Code
let arr = new Array(900, 940, 950, 1100, 1500, 1800);
let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);
let n = arr.length;
console.log(
  "Minimum Number of Platforms Required = " + findPlatform(arr, dep, n)
);
