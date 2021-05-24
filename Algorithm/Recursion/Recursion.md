# Recursion
Recursion is when someting calls/use itself. Recursive function is a function that calls itself.

Recursion function can be dangerous as it call itself contonuosly. So the Stack could overflow if the recursion dosent stop.

Every recursive function must have a 'base case' to stop the recusion. For Example this code below:
<code>
let counter;
function inception(){
    if(counter > 3){
        return 'done'
    } //base case
    inception()
}
</code>

is going to return undefined. Bcz the recusrionfunction dont know what to return. So you have to do

<code>
let counter;
function inception(){
    if(counter > 3){
        return 'done'
    }
   return  inception()
}
</code>

Rules;  
1. Identify the base case
2. I dentify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 return