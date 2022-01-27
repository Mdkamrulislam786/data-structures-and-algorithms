let nums = [2, 7, 11, 15],
  target = 9;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; i++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

let indices = twoSum(nums, target);
console.log(indices);
