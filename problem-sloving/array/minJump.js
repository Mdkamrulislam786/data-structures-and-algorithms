//Minimum number of jumps gfg
function minJump(arr, n) {
  let maxReach = arr[0];
  let steps = arr[0];
  let jump = 1;

  if (n === 1) return 0;
  else if (arr[0] === 0) return -1;
  else
    for (let i = 1; i < n; i++) {
      if (i === n - 1 && steps) return jump;
      maxReach = Math.max(maxReach, i + arr[i]);
      steps--;
      if (steps < 0) return -1;
      if (steps === 0) {
        jump++;
        if (i > maxReach) return -1;
        steps = maxReach - i;
      }
    }
}

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
const n = arr.length;
console.log(minJump(arr, n));

//explanation: maxReach to check how many steps we can move forward, steps = curr_index+element, steps ended make a jump, update step = maxReach - curr_index
