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
    let leftElement = leftArray[leftIndIndex];
    let rightElement = rightArray[rightIndex];
    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
    console.log({ leftIndIndex, rightIndex });
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
  let middleIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);
  let obj = { leftArray: [3, 4, 12], rightArray: [1, 2, 3, 31] };
  console.log("mergeSort", {
    leftArray,
    rightArray,
  });
  return merge(obj.leftArray, obj.rightArray);
}

mergeSort(rarray);
