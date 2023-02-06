// JavaScript program to find union of
// two sorted arrays

/* Function prints union of arr1[] and arr2[]
	m is the number of elements in arr1[]
	n is the number of elements in arr2[] */
function printUnion(arr1, arr2, m, n) {
  var i = 0,
    j = 0;

  const intersection = [];
  while (i < m || j < n) {
    if (arr1[i] < arr2[j]) console.log(arr1[i++] + " ");
    else if (arr2[j] < arr1[i]) console.log(arr2[j++] + " ");
    else if (arr1[i] === arr2[j]) {
      console.log(arr2[j]);
      intersection.push(arr2[j]);
      j++;
      i++;
    } else {
      console.log(arr2[j]);
      j++;
      i++;
    }
  }

  console.log(intersection);

  return 0;
}

var arr1 = [1, 2, 4, 5, 6];
var arr2 = [2, 3, 5, 7];
var m = arr1.length;
var n = arr2.length;
printUnion(arr1, arr2, m, n);
