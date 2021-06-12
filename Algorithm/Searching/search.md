# Searching Algorithms

1. Linear Search
   We go one by one to find an item in an array orany data stucture. like javascript indexOf() .find() .includes() this typ[e of searching is liniear. Time complexity is O(n)

2. Binary Search
   If the array is sorted we can do binary search to optimize perforamnce. It finds the middle index, then goes right if the searched item is bigger , goes left if the searched item is smaller, keeps going like this untill we find the item in the tree. Ww have done this in binary search tree. Look at the tree to find a how this searching looks like in code. Time complexity is O(log n)

3. Breath for search/Traversal
   Tree data structure ,searching starts from topnode , then goes to 2nd level starts from left to goes to right, then 3rd level keeps going the same way untill finds the searching item. Time complexity O(n). MOre memopry used to find shortes/closest nodes. FB frined recomandation

4. Deapth for search
   Tree data structure like. Starts from top node, then keeps going to left nodes, goes to riught noed if it dont find the searching node. Use to find if somthing exists less memory , slower

REsource for BFS/DFS : https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr  

If a wighted graph has negetive numbers bellmonford algorithms is better for finding shortest path. Takes more time to run O(n^2)  
Djikster algorithm cant accomodate negeative weights, but its faster, uses less memory than bellmondford algoruthm to find the shortest path in a weighted graph  
