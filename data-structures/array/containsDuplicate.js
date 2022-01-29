var containsDuplicate = function (nums) {
  const map = {};
  let bool = false;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) bool = true;
    map[nums[i]] = true;
  }

  return bool;
};

let isTrue = containsDuplicate([1, 2, 1, 4]);
console.log(isTrue);
