function peakElement(arr, n) {
  var max = 0;
  var index = 0;

  for (var i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  console.log(max, index);

  return index;
}

peakElement([5, 3, 4, 6], 4);

// Time complexity: 0(n)
// Space complexity: 0(1)
