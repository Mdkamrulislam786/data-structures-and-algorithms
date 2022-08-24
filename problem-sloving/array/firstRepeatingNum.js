function printFirstRepeating(arr) {
  // Initialize index of first
  // repeating element
  let min = -1;

  // Creates an empty hashset
  let set = new Set();

  // Traverse the input array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // If element is already in
    // hash set, update min
    if (set.has(arr[i])) min = i;
    // Else add element to hash set
    else set.add(arr[i]);
  }

  // Print the result
  if (min != -1) console.log("The first repeating element is " + arr[min]);
  else console.log("There are no repeating elements");
}

// Driver code
let arr = [10, 5, 3, 4, 3, 5, 6];

printFirstRepeating(arr);
