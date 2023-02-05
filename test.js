const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (leftArray, rightArray) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
    if (leftIndex === leftArray.length) {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    } else if (rightIndex === rightArray.length) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return result;
};

const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(mergeSort(numbers4));
