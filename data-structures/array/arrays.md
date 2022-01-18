# Arrays

MDN: The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.  
An array is a series of memory locations – or 'boxes' – each of which holds a single item of data, but with each box sharing the same name.
Array is a collection of data.
Array is a typeof object in javascript
Arrays.protype[x] x=methods may not be 0(1) you have to understand how they work behind the scene to find the big 0. C and JS allocates memory for Array the same way. Ex: add new item to an array it will copy prev array and move it to a new memory location with the new added item

### Static vs dynamic array

In C Static array can store a specific number of elements taht is of the same type. Dynamic array can store as many elements as you want of different types. primitive types are stored as value in an array but objects are stored as refrence in an array. so if you chnage the object it\ll reflect change in the array but if you change a value ex;

```
let isBool = true
let arr = []
arr.push(isBool)
isBool = false
arr[0]//print true
```
