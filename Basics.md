#### Basics: pointers, structures, classes, dynamic memory allocation, and recursion

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
    - Heap  In dynamic memory allocation the memory is allocated at runtime from the heap segment 

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
        return n*fact(n-1)
    }
}
</code>