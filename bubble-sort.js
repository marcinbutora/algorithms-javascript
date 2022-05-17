const arrayToSort = [1, 3, 0, 9, 2, 0, 0, 7];

bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
};
console.log("nieposortowane: " + arrayToSort);
console.log("posortowane: " + bubbleSort(arrayToSort));
