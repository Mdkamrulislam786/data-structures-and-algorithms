let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

let rotate = function (numsa, k) {
  let final = numsa.splice(numsa.length - k);
  console.log(final);
  for (let i = 0; i < final.length; i++) {
    numsa.splice(i, 0, final[i]);
  }
  return numsa;
};

rotate(nums, k);
