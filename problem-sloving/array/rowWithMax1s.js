let arr = [
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

let n = 4;
let m = 4;

function rowWithMax1s(arr) {
  var j = m - 1,
    max_row_index = 0;

  for (var i = 0; i < n; i++) {
    var flag = false;
    while (j >= 0 && arr[i][j] == 1) {
      j = j - 1;
      flag = true;
    }

    if (flag) max_row_index = i;
  }

  if (max_row_index == 0 && arr[0][m - 1] == 0) return -1;
  return max_row_index;
}

console.log(rowWithMax1s(arr));
