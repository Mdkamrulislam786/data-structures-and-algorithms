function findFrequency(v, x) {
  var frequency = 0;
  for (var index = 0; index < v.length; index++) {
    if (v[index] === x) frequency += 1;
  }

  return frequency;
}

// Original arrray
var arr = [1, 1, 1, 10, 27];
findFrequency(arr, 1);
console.log(arr);
