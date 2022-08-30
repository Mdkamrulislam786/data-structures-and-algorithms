function rearrange(arr, n) {
  const rearrangedArray = [];
  const positiveNumbers = [];
  const negativeNumbers = [];

  for (let i = 0; i < n; i++) {
    const element = arr[i];
    if (element >= 0) positiveNumbers.push(element);
    else negativeNumbers.push(element);
  }

  for (let j = 0; j < n; j++) {
    const positiveNum = positiveNumbers[j];
    const negativeNum = negativeNumbers[j];

    if (positiveNum >= 0) rearrangedArray.push(positiveNum);
    if (negativeNum) rearrangedArray.push(negativeNum);
  }

  return rearrangedArray;
}

const arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
const n = arr.length;
console.log(rearrange(arr, n));
