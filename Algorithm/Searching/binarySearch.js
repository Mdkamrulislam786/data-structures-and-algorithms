const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const N = arr.length;
function binarySearch(arr, N, target) {
  let left = 0;
  let right = N - 1;
  while (left < right) {
    let middleIndex = Math.floor((left + right) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    if (arr[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return right;
}

console.log(binarySearch(arr, N, 6));
//searching for 9
