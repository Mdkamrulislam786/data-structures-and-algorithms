function getPairs(arr, n, k) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!Object.keys(obj).includes(arr[i])) obj[arr[i]] = i;
    if (Object.keys(obj).includes(`${k - arr[i]}`)) {
      count++;
    }
    console.log(obj);
  }
  return count;
}

console.log(getPairs([1, 5, 7, 1], 4, 2));
