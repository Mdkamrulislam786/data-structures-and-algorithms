// Javascript program to compute factorial of big numbers

// This function finds factorial of large numbers
// and prints them
function factorial(n) {
  let res = new Array(500);
  let factorialNum = "";

  // Initialize result
  res[0] = 1;
  let res_size = 1;

  // Apply simple factorial formula n! = 1 * 2 * 3 * 4...*n
  for (let x = 2; x <= n; x++) res_size = multiply(x, res, res_size);

  console.log("Factorial of given number is ");
  for (let i = res_size - 1; i >= 0; i--) factorialNum += res[i];
  console.log("factorialNum", factorialNum);
}

// This function multiplies x with the number
// represented by res[].
// res_size is size of res[] or number of digits in the
// number represented by res[]. This function uses simple
// school mathematics for multiplication.
// This function may value of res_size and returns the
// new value of res_size
function multiply(x, res, res_size) {
  let carry = 0; // Initialize carry

  // One by one multiply n with individual digits of res[]
  for (let i = 0; i < res_size; i++) {
    let prod = res[i] * x + carry;

    // Store last digit of 'prod' in res[]
    res[i] = prod % 10;

    // Put rest in carry
    carry = Math.floor(prod / 10);
  }

  // Put carry in res and increase result size
  while (carry) {
    res[res_size] = carry % 10;
    carry = Math.floor(carry / 10);
    res_size++;
  }
  return res_size;
}

// Driver program
factorial(100);

/* flow
this multiplication was implemented by this code

120
 *6
 ___
 720
1st loop 
2,1,1
prod=1*2+0
res[0]=2
carry=0

2nd loop 
3,2,1
prod=2*3+0
res[0]=6
carry=0

3rd loop 
4,6,1
prod=6*4+0
res[0]=4
carry=2

while carry=2
res[1]=2
carry=0
res_size=2


4th loop 
5,[4,2],2
prod=4*5+0
res[0]=0
carry=2

prod=2*5+2
res[1]=2
carry=1

while carry=1
res[2]=1
carry=0
res_size=3

5th loop 
6,[0,2,1],3
prod=0*6+0
res[0]=0
carry=0

prod=2*6+0
res[1]=2
carry=1

prod=1*6+1
res[1]=7
carry=0

while carry=1
res[3]=1
carry=0
res_size=3

*/
