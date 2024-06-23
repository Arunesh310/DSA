// in this problem we check if the given average target can be acheived by one or multiple pairs of numbers and return true and false accordingly

let averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = arr[left] + arr[right] / 2;

    if (average === target) {
      return true;
    } else {
      left++;
      right--;
    }
  }
  return false;
};
