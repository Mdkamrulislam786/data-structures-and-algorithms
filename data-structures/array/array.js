//1.Reverse a sstring using vanilla js  ES6/5
function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  var newString = "";

  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // or newString = newString + str[i];
  }
  /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

  // Step 3. Return the reversed string
  return newString; // "olleh"
}

reverseString("hello");

//1. Witihout comments ES6/5
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString("hello");

//ES6
const reverseString = (str) => str.split("").reverse().join("");
reverseString("hello");

//MERGE SORTED ARRAYS
function sortedArrys(arr1, arr2) {
  let mergedUnsortedArr = [...arr1, ...arr2];
  let mergedSortedArr = [];
  for (let index = 0; index < mergedUnsortedArr.length; index++) {
    const currElement = mergedUnsortedArr[index];
    const prevtElement = mergedUnsortedArr[index - 1];
    console.log(currElement);
    if (currElement <= !prevtElement) {
      mergedSortedArr.push(currElement);
    }
  }
  return mergedSortedArr;
}

sortedArrys([0, 3, 4, 31], [4, 6, 30]);

//MERGE SORTED ARRAYS
// Solution1:
// O(n) time & O(n) space
function mergeTwo(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {

    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}

mergeTwo([0, 3, 4, 31], [4, 6, 30]);

//ES6
const mergeTwo = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
const sortedArr = mergeTwo([0, 3, 4, 31], [4, 6, 30]);
console.log(sortedArr);

