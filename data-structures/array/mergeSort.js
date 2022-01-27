//MERGE SORTED ARRYS
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
//MERGE SORTED ARRYS ENDS

//MERGE SORT
const rarray = [12, 3, 4, 31, 1, 2, 3];
let x = [8, 19];
let y = [29, 30];

function merge(leftArray, rightArray) {
  console.log({
    leftArray,
    rightArray,
  });

  const output = [];
  let leftIndIndex = 0,
    rightIndex = 0;

  while (leftIndIndex < leftArray.length && rightIndex < rightArray.length) {
    console.log({ leftIndIndex, rightIndex });
    let leftElement = leftArray[leftIndIndex];
    let rightElement = rightArray[rightIndex];
    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
  }

  console.log("output", [
    output,
    ...leftArray.slice(leftIndIndex),
    ...rightArray.slice(rightIndex),
  ]);

  return [
    ...output,
    ...leftArray.slice(leftIndIndex),
    ...rightArray.slice(rightIndex),
  ];
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  console.log("mergeSort");
  let middleIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

mergeSort(rarray);
//MERGE SORT ENDS
