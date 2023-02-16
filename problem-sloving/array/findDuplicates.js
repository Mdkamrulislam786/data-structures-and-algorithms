let a = [1, 4, 3, 2, 7, 8, 2, 3, 4];

let n = a.length;

// count the frequency
for (let i = 0; i < n; i++) {
  a[a[i] % n] = a[a[i] % n] + n;
}

console.log(a);

for (let i = 0; i < n; i++) {
  if (a[i] >= n * 2) {
    console.log(i);
  }
}

/*
O(n) time 0(1) space
Explanation:
This approach works because all elements are in the range from 0 to n-1 and arr[i] would be greater than n only if a value “i” has appeared more than once.
*/

console.log("a", a);

function findDuploicates(arr, n) {
  for (let i = 0; i < n; i++) {
    const element = Math.abs(arr[i]);
    if (arr[element] < 0) console.log(element);
    else arr[i] = -arr[i];
  }
}

console.log(findDuploicates([1, 2, 3, 4, 3, 3], 6));
