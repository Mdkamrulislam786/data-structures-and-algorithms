### Space complexity

When a program executes it has two ways to remember things. The heap and the stack the heap is usually where we store variables that we assign values to and the
stack is usually where we keep track of our function calls. How much memory is being used? is the question here.

What causes space complexity?

1. Variables
2. Data structures
3. Function calls
4. Memory allocations

```
//#1 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

// #2 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)
```

#1 has o(1) bcz it has only 1 variable i, #2 is o(n) bcz it has one var i, also a new data-structures a new array which have to store n number of elem. So its O(n) space complexity
