

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

