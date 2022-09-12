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
