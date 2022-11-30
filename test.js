function firstMissingPositive(arr) {
  arr.sort((a, b) => a - b);
  let ans = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ans) ans++;
  }
  return ans;
}

// driver code
let arr = [1, 2, 3];
console.log(firstMissingPositive(arr));
