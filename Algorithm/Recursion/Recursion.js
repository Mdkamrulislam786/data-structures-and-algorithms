//write recusrive function that returns any number

//recursive
function factorialOfAnyNumber(num) {
  let answer = 2;

  if (num === 2) {
    //base case
    return answer;
  } else {
    //recursive case
    answer = num * (num - 1);
  }
  num--;
  //recusrive case
  factorialOfAnyNumber(num);
  return answer;
}
// 5!= 5*4!
