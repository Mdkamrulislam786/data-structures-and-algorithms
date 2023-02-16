function getPairs(arr, n, k) {
  const obj = {};
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (obj[k - arr[i]]) count += 1;
    else obj[arr[i]] = 1;
  }
  return count;
}

console.log(getPairs([1, 5, 7, 1], 4, 2));
