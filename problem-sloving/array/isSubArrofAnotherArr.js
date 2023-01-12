const arr1 = [11, 1, 13, 21, 3, 7]; // [ 1, 3, 7, 11, 13, 21 ]
const arr2 = [11, 3, 7, 2];
const N1 = arr1.length;
const N2 = arr2.length;

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

function findSubarr(arr1, n1, arr2, n2) {
  //sort arr 1
  arr1.sort((a, b) => a - b);
  console.log(arr1);
  // binary search to look for each value of arr2 in arr1
  for (let i = 0; i < n2; i++) {
    const element = arr2[i];
    const result = binarySearch(arr1, n1, element);
    console.log(element, result);
    if (result == -1) return false;
  }

  return true;
}

console.log(findSubarr(arr1, N1, arr2, N2));
