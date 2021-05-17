# Trees
A data structure that is connected with nodes, has hierarchical. It has root parent child leafsibling subtrees sibling  

Trees structure Image: https://www.tutorialspoint.com/data_structures_algorithms/images/binary_tree.jpg

The DOM in broweser is a tree datat structure. In real life we have diff types of trees. Sameway we have diff types of tree data structures.

## Binary trees

Each nodes can only have 0,1 or 2 nodes, each child can only have one parent. Perfect binary tree has 2nodes for each parent ite is completed binary tree that is much more effecient. A full binary tree has either one, two or 0 nodes.

Binary trees has a time complexity of O(log N).
If we see a 3level binary tree. we can find the num of nodes of each level by using 2^n, where n is the num of level
Level0 = 2^0 = 1
Level1 = 2^1 = 2
Level2 = 2^2 = 4
Level3 = 2^3 = 8 level 3 has 8 nodes

Num of nodes in the tree is mesured by 2^h - 1, where h is the num of level/high of a tree. Heigh starts from 1 whwere level starts from 0.  

2^3 - 1 = 7, so a 3level deep binary 3 has 7nodes
log simply means half
log 100 = 2 cz  
10^2 = 100  

## Binary Search trees
Basics:  
1) Each node of a BST may only have exactly 0, 1, or 2 children.
2) For each node X, all nodes in its left subtree have a value less than X. The inverse is also true. Means for each node the right value should be bigger than the node, left value should be smaller than the node
3) Both the left and right subtrees of X must also be BSTs.


Balanace search tree gives you O(log N) but unbalanced search tree gives O(n). So you want balanced search tree not unbalanced one. To balance a BST you will use AVL Tree or Red/Black tree. You will find many packages that will do automatically this for you.  

## Binary Heap
Priority queue. highest at the top then keeps adding from the left to right each node has 2 child, each node is bigger than child

## Trie
Used for dictionary google search autifill sugestions