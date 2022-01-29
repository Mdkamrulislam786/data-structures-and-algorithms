let str = "I love dogs";

function findLongestWord(str) {
  let array = str.split(" ");
  let longStr = "";
  for (let i = 0; i < array.length; i++) {
    if (longStr.length < array[i].length) {
      longStr = array[i];
    }
  }
  console.log(longStr);
}

findLongestWord(str);
