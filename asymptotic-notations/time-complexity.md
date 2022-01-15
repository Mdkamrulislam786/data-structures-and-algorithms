### Time complexity and BigO

Cheatsheet: https://www.bigocheatsheet.com/

Time Complexity is the study of efficiency of algorithms. How much time is being taken to execute an alogorithm that grows with the size of the input. Big O is used to measure the Time(runtime) of your function as the size of the input grows.

Visit the Notes to understand it better with examples: https://codewithharry.com/static/common/uploads/ds1.pdf

### what is good code?

Its good code if we have:

1.Readability- means can others understand your code easily
2.Scalabilty- means how well a program performs with large inputs. we measure it with.(time and space complexity/ memeory and speed)

### Big(0)

Why do we use big o to measure performance? bcz in diff computers the time will be diff if u measure with mill secs or other units. Its bcz the otherr pc is more powerfull.

best to worst time complexity with Big(n), it dosent have to be n always u can put any letter like O(b/c/...)

0(1)>0(logn)>0(n)>0(nlogn)>0(n^2)>0(2^n)>0(!n)

### How to calculate time-complexity of a program/function/algorithm

Rules;

1. Worst case
2. Remove constants
3. Different terms for inputs
4. Drop Non-Dominants

   <b>Worst case:</b>  
    We always talk about the worst case with Big(0). we say Big(0) Of n,logn etc to define the worst case of a program/code. A program might be 0(1) or O(n) but we care about the worst case so we say 0(n) not the best case 0(1).
   <b>remove constants</b>  
    0(1+n/2+100000+2). here 1,2 are steps or opertaions of a program. here we dont care about the constants cz the n could be a 1M or 1B so adding 500 to it wont matter. So we drop the constants and the time complexity become O(n)
   <b>Different terms for inputs</b>  
    If your program has 2 diff inputs then the Big(0) will not be the same. If nested we multiply(\*) the steps like nested for loops. If not nested we add(+) the steps

   ```
   fn compressboxes(boxes1,boxes2){
       boxes1.forEach(item=>console.log(item)) 0(n)
       boxes2.forEach(item=>console.log(item)) 0(n)
   }
   compressboxes(box1,box2) is O(n+n) = 0(n),NO!, bcz we are looping through 2 diff inputs its calculates like this  0(a+b) thi is the big 0
   ```

   <b> Drop Non-Dominants</b>
   the func below is O(n+n^2), but we drop the non-dominant term. which is n remove n, so we have O(n^2). Time complexity is O(n^2)

   ```
   function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
    console.log(number);
    }); //o(n)

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
    console.log(firstNumber + secondNumber);
    });
    }); 0(n*n=n^2)
    }

    printAllNumbersThenAllPairSums([1,2,3,4,5])

   ```

<b> 0(1)</b>-> constant time. No matter how large the inputs grows it will always take the same time. Ex:get first item of an array or grab first and last item of an array.

```

fn getFirsAndLastElem(arr){
console.log(arr[0]) //0(1)
console.log(arr[arr.length-1]) //0(1)
}
0(1)+0(1)=0(2) but we say 0(1) dosent matter if its 0(2/3/4...)

```

<b>O(n)</b>- if numbers of operations grows linear to the size of an array or elements.Like a for loop. more elemtns you loop more opertaions you r doing.

```

let arr = new Array(10000).fill('nemo')
function findNemo(arr){
for(let i = 0; i<arr.length; i++){
if(arr[i]=='nemo') console.log('found nemo')
}
}
findNemo(arr)
Time complexity 0(n)

```

<b>O(n^2)</b>->
Qaudratic time - n is element 2 elemts 2^2=4 opertaions. 3 elem 2^3=8 opertions.

```

const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
for (let i = 0; i < array.length; i++) {
for (let j = 0; j < array.length; j++) {
console.log(i, j);
}
}
}

logAllPairsOfArray(boxes);

```
