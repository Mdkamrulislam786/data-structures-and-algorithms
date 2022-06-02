function rotate(array, n) {
    const lastElem = array[n - 1];
    for (let i = n - 1; i > 0; i--) {
      array[i] = array[i - 1];
    }
    array[0] = lastElem;
    return array;
  }
  
  console.log(rotate([34, 35, 45, 48, 49], 5));
  