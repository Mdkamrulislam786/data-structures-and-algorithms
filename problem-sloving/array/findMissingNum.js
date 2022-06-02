function getMissingNo(array, n) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= array[i];
  return total;
}
console.log(getMissingNo([1, 2, 3, 5], 4));

//SOL 2
function missNum(array, n) {
  let missingNumber = 0;
  let newArr = new Array(n + 1);

  if (n == 2) {
    missingNumber = 3 - array[0];
  } else {
    for (let i = 0; i < array.length; i++) {
      newArr[array[i] - 1] = 1;
    }
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] != 1) {
        missingNumber = i + 1;
        break;
      }
    }
  }

  return missingNumber;
}
