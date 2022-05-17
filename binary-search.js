binarySearch = (sortedArray, numberToFind) => {
  // first index of array
  let startIndex = 0;
  // last index of array
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    // loop over the all array
    let middle = Math.floor((startIndex + endIndex) / 2);
    // we found the middle index of array
    if (sortedArray[middle] == numberToFind) {
      // we find the number
      return true;
    } else if (sortedArray[middle] < numberToFind) {
      // we are searching in right part of array
      startIndex = middle + 1;
    } else {
      // we are searching in left part of array
      endIndex = middle - 1;
    }
  }
  // number was not found
  return false;
};

const array = [1, 3, 4, 5, 6, 7, 8, 9, 12];
console.log(binarySearch(array, 12));
