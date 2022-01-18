# Arrays

MDN: The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.  
An array is a series of memory locations – or 'boxes' – each of which holds a single item of data, but with each box sharing the same name.
Array is a collection of data.
Array is a typeof object in javascript

### Static vs dynamic array

In C Static array can store a specific number of elements taht is of the same type. Dynamic array can store as many elements as you want of different types. primitive types are stored as value in an array but objects are stored as refrence in an array. so if you chnage the object it\ll reflect change in the array but if you change a value ex;

```
let isBool = true
let arr = []
arr.push(isBool)
isBool = false
arr[0]//print true
```
