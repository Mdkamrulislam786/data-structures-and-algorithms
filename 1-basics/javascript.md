### Javascript

### Execution context

"Everything in javascript happens in an execution context"
Think of it like a box where it has 2components

1. Memory / Variable environment
2. Code / Thred of execution

In Memory all the declared variable, functions are stored as akey:value pair. In Code all the code is executed one line at a time.

"Javascript is a synchronus single threaded language"

Means it executes a programe one line at a time in a specific(synchronus) order.

Lets see an example:

```
var n =2
function square (num){
    var ans = num * num
    return ans
}
var square2 = square(n)
var square4 = square(4)
```

Now this code is executed in a global execution context which is created in 2phase.

1. Memory allocation/creation phase - it goes to first line and stores n:undefined, square: {...} (the whole function code), square2"undefined, square4:undefined
2. Code execution phase - now the n:undefined is replaced with n:2, then it sees the square function it has nothing to execute, next it moves to square2 and it ses a function invocation, now another execution context is created for the square(n), it also goes with the same 2phase, then it returns ans = 4,
   which is put to var square2 : 4 which was previously undefined, now the new execution gets deleted.
   Now we go to square4 new execution context gets created, it return 16, square4:16 now, next the EC gets deleted. Finlly the global execution ontext gets deleted.

### Callstack

So these whole global execution context, execution context happens in js callstack. when we run the program in the callstack a GEC is created then when we invoke the square fn another EC is cretead when this new ECis executed it gets removed from the callstack and we've the GEC again, if another fn gets invkoed EC2 gets creted,executed then deleted, once every EC gets removed from the callstack then finally the GEC gets removed and the callstack gets empty.

"Callstack maintaince the order of the execution context"

### Hoisting

JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable and function declarations prior to execution of the code. Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting.

Conceptually hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code". This allows variables to appear in code before they are defined. Note however, that any variable initialization in the original code will not happen until the line of code is executed.

Read: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

### Scope

The current context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use.
Scope is directly dependent on the lexical enivironment. lexical means in a hierchy. lexical scope means local memory along with lexical env of its parent. lexical scope is created whenever a EC is created
Lexical scope = local memory + ref to lexical parent memory

### Temporal dead zone

is applied to let and const only, the time between let and const declaration and initialization lies the TDZ. you cant acccess let and const in the TDZ.you'll get a reference error

### BLOCK SCOPE & Shadowing

{} defines a block also known as compound statement. we use it to group multiple js statements in a group where js expects only one statment. like in a if condition js expects only one statement we can have a block to use mutiple statement
let and const has block scope var dosent

### Closure

A funtion along with its lexical scope forms a closure. Example

```
function outest(){
    var c = 20;
    funtion outer(b){
        function inner(){
            console.log(a,b,c)
        }
        return inner
    }
    return outer
    let a = 10;
}

var close = outest() ('hello world') //argument b of outer func
close()
```
