//Log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];
function move(arr, val) {
  var j = 0;
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] !== val) {
      arr[j++] = arr[i];
    }
  }
  arr.length = j;
}

// BUILD AN ARRAY

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    let item = this.data[index];
    this.shifItems(index);
    return item;
  }
  shifItems(idx) {
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("how");
newArray.push("are");
newArray.push("you");
newArray.push("?");

newArray.deleteAtIndex(0);
console.log(newArray);