#### Basics: pointers, structures, classes, dynamic memory allocation, and recursion

You must have a deep understanding of one programming language. <br>

<b>pointers</b>
Pointers is a special variable that is capable of storing some address. It points to a memory location where the first byte is stored.
Ex:
C lang
<code>
int i = 10 //declare vaiable has memory location 1000-1009
int *p, *q //declaire pointers
p = &i //now p is pointing to int i memory location (first byte 1000)
p = q // now p and q has same memroy address 1000
printf("%d", *p, *q) // output: 10 10
</code>

---

<b>structures</b>

Structures in C is a collection of variables of different types under a singlr name. It is a user defined data type in C/C++. Has Local and global stucture/scope. It is just like a constructor function in Javascript or Class or Object

C lang
<code>
//define stucture in c
struct Person
{
int age
float salary
};

int main()
{
struct Person person1,person2

    person1.age = 27
    person1.salary = 23000.752

}
</code>

<b>Classes</b>

C++
<code>
Class Student
{
public:
int: id;
double: gpa;
}

int main()
{
Student Alim,Suborna; //object created

    Alim.id, Alim.gpa //access class property

}
</code>

<b>dynamic memory allocation</b>

- A statically allocated variable or array has a fixed size in memory <br>
- Dynamic memory allocation is a way in which the size of a data structure can be changed during the runtime. <br>
- Memory assigned to a program can be broken down in four segments
  - Code
  - Static/global variables (dss, bss)
  - Stack (Last In First Out)
  - Heap In dynamic memory allocation the memory is allocated at runtime from the heap segment

<b>recursion</b>

recursive call
<code>
int main
{
int result = fact(5)
printf("The factorial of 5 is %d", result)
}

int fact(int n)
{
if(n==1){
return 1
}else{
return n\*fact(n-1)
}
}
</code>

<b>Memory and storage</b>
Memory(ram) is temporary and storage is permanent.When a app(chrome) is open it uses memory cz its faster to read and write there. when you download or hit save its stored on the storage. when you declare a variable int a = 1; its stored as 32bit/64bits 0000...1.
Memory = a long tape of bytes. 1 bite = 8 bit. CPU has a memory controller CPU asks for 0 or 10000 number address without any delay. cz that memory controller has access/is connected to every address in a memory.

