// finding the largest element in an array

const largestElement = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(
  largestElement([
    545, 7, 786, 38, 89, 9, 57, 4, 57689, 94, 75, 959, 9, 567, 597, 9,
  ])
);
