const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const row = arr.length;
const col = arr[0].length;

const spiralPrint = (arr, row, col) => {
  let di = 0;
  let cMin = 0,
    rMin = 0,
    cMax = col - 1,
    rMax = row - 1;

  while (rMin <= rMax || cMin <= cMax) {
    if (di === 0) {
      console.log("di0", di);
      for (let i = cMin; i <= cMax; i++) {
        const element = arr[rMin][i];
        console.log(element);
      }
      rMin++;
      di++;
    } else if (di === 1) {
      console.log("di1", di);
      for (let i = rMin; i <= rMax; i++) {
        const element = arr[i][cMax];
        console.log(element);
      }
      cMax--;
      di++;
    } else if (di === 2) {
      console.log("di2", di);
      for (let i = cMax; i >= cMin; i--) {
        const element = arr[rMax][i];
        console.log(element);
      }
      rMax--;
      di++;
    } else if (di === 3) {
      console.log("di3", di);
      for (let i = rMax; i >= rMin; i--) {
        const element = arr[i][cMin];
        console.log(element);
      }
      cMin++;
      di = 0;
    }
  }
  console.log("r", di, cMax, cMin, rMax, rMin);
};

spiralPrint(arr, row, col);

/*
  di=0 cMin>cMax rMin const++
  di=1 rMin>rMax cMax const--
  di=2 cMax>cMin rMax const--
  di=1 rMax>rMin cMin const++
  */
