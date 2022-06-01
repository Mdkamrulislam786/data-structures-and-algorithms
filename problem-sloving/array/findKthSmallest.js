function findKthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  console.log("Kth smallest", arr[k - 1]);
  return arr[k - 1];
}

// Original array
var arrr = [1, 15, 45, 10, 27];
findKthSmallest(arrr, 3);
console.log(arrr);
