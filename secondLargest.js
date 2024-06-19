// finding the second largest element in an array

const secondLargest = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(
  secondLargest([
    545, 7, 786, 38, 89, 9, 57, 4, 57689, 94, 75, 959, 9, 567, 597, 9,
  ])
);
