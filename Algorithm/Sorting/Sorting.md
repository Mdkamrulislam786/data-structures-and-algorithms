# Sorting

the built in .sort() method dosent always works proper the time and space complaxity isntguranteed ads dif browsers handles it differently.

Watch how diff sorting looks Animation: https://www.toptal.com/developers/sorting-algorithms

### We will be learning:

1. Buble
2. Insertion
3. Selection
4. Merge
5. Quick Sort

First 3 are elemantary sorting algorithms and secod 2 are more advanced

## How it works:

1. Buble Sort
   Takes first 2numbers of array, compares both which one is smaller, puts the smaller one at first, second compares the socond 2numbers then puts smaller one first, we ran 2for loops 2 loop through numbers and do this sorting. Time Complexity O(n^2) and space complexity O(1)

2. Selection Sort
   Takes the firstnumber of an array compares to each number, stops when finds a smaller value puts iit at the top, 2for loops would do it Time Complexity O(n^2) and space complexity O(1)

3. Insertion sort
   Works like how you think when you are given an nearly sorted array the number is between 1-18. Best for when you have an short length of array that is nerly sorted. Time Complexity O(n^2) and space complexity O(1)

4. Merge Sort
   Uses divide and conquere startigy.Space complexity O(n) and Time Complexity is O(n log n)

5. Quick Sort
   Complex uses divide and conquere, Time Complexity is Best , avergae O(n log n) worst O(n^2) and Space complexity O(n log n)

#### Which sorting algorithm is the best?

1. Insertion: best for when you have very small numbers of elements in an array and if the array is nearly sorted.
2. Buble sort: almost never gonna use t
3. Selection: almost never use it
4. Merge sort: Best time comexity always O(n log n), space complexity O(n). Best if you dontcare about space complexity. Fast
5. Quick sort: Worsttime com O(n^2) , avargae,best O(n log n) and space omplexity O(n log n)

In real life we use mostly merge and quick sort. Most of our sorting algorithm has O(n log n) time complexity and mathemtically it is impossibe to have better time complexity.
THese 5 are in the category of comparision sort.
Noncomparision sort are where you almost dont compare things, the inputs are really small. They are the only ones that has better time complexity than O(n log n).
Among Noncomparision sort 2 are :

1. Radix sort
2. Counting sort

If you want to learnHeap sorting: https://brilliant.org/wiki/heap-sort/ similar to quick and merge sort but they are actualy slower.  

### INTERVIEW SORTING QUESTIONS:
1. Sort 10 schools around your house by distance:
   Answer: insertion sort

2. eBay sorts listings by the current Bid amount:
   Answer: radix or counting sort

3. Sort scores on ESPN
   Answer: Quick sort

4. Massive database (can't fit all into memory) needs to sort through past year's user data
   Answer: Merge Sort

5. Almost sorted Udemy review data needs to update and add 2 new reviews
   Answer: Insertion Sort

6. Temperature Records for the past 50 years in Canada
   Answer: radix or counting Sort
   Answer: Quick sort if decimal places

7. Large user name database needs to be sorted. Data is very random.
   Answer: Quick sort

8. You want to teach sorting
   Answer: Bubble sort
