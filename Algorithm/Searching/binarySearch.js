const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const N = arr.length;

const binarySearch = (arr, N, target) => {
  let left = 0;
  let right = N - 1;

  while (left < right) {
    let middleIndex = Math.floor((left + right) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    if (arr[middleIndex] < target) left = middleIndex + 1;
    else right = middleIndex - 1;
  }

  if (arr[right] === target) {
    return right;
  }

  if (arr[right + 1] === target) {
    return right + 1;
  }

  return -1;
};

console.log(binarySearch(arr, N, 6));
//searching for 9

export { binarySearch };
