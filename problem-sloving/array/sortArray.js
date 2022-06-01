function sortArray(ar) {
  var i = 0,
    j;

  while (i < ar.length) {
    j = i + 1;
    while (j < ar.length) {
      if (ar[j] < ar[i]) {
        console.log(ar[j], ar[i]);
        var temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      }
      j++;
    }
    console.log(ar);
    i++;
  }
}

// Original Array
var arr = [1, 15, 45, 10, 27];
sortArray(arr);
console.log(arr);
