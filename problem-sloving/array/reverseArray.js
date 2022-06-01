function reverseArray(arr) {
  let ret = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    // ret.push(arr[index]);
    ret[arr.length - 1 - index] = arr[index];
  }
  console.log(ret);
  return ret;
}
reverseArray([1, 2, 3, 4, 5]);
