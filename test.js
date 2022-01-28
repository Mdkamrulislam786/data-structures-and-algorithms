// var nums = [0, 1, 0, 3, 12];
var nums = [0, 0, 1];
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums);
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
  }
};
moveZeroes(nums);
