const arrayToSort = [1, 6, 9, 4, 5];

bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
console.log("array to sort: " + arrayToSort);
console.log("sorted array " + bubbleSort(arrayToSort));
