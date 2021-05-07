# How does JavaScript work

<b>What is an Program?</b>  
A program has to  

1. allocate memory otherwise we wont have variables and stuff
2.  parse(read) and excute(run) commands


<b>Javascript engine</b>  
We need a javascript engine to run our program.In chrome the javascript engine is 'V8' that runs our program into machine executable instructions for the browser.
The engine consists of 2parts 

1. Memory Heap : where the ememeory allocation happens
2. Call Stack: code read and exceutes

Memery Heap: If too many unused variable are left with out beieng used, then the meory heap gets full causing a memery leak that throws a error like 'Javascript Heap out of memery'.

We have a function 

<code>

const one =()=>{
    const two=()=>{
        console.log(4)
    }
    two()
}
</code>

Call stack: first one() gets called and put into the callstack, secondly two() gets called and put above one()and inside two(), console.log(4) gets excuted and returns 4. Now callstack sees theres no code leftto excute sop it console.log(4) returns 4 and gets reoved from callstack, then function two() gets removed from callstack and then one() gets remove returning the result.  

<b>Javascript is single threaded language that can be non-blocking</b>  
Synchronus means lin1 gets executed then lin2 lin3 and so on...

Javascript Run time: We need more than javascript V8 engine to run asynschonus code, on topf the V8 engine they have somthings like Web API's, callback queues and event loop

<code>
console.log('1')  
setTimeOut(
console.log('2')
,2000
)  
console.log('3')  
</code>

how does this work?  
first it console logs 1 as it is synchronus 2nd V8 sees setTimeOut so it pushes the setTime out function into the web apis that holds the setTimeout for 2second, 
Why?! bcz setTime out is not a part of the callstack it is a part of the webapi's of chrome v8 engine, AJAX, setTimeout, DOM are also a part of the web api.
3rd program goes to next line that prints console.log('2')  2.
4th after 2second web apis passes the setTimeout-> to the callback queue -> then the event loop pulls the setTimeoout func into the callstack again and setTime gets executed and prints 2









