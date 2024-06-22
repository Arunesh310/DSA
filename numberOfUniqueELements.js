//counting the number of unique elements in the array

let uniqueNumber = (nums) => {
  // initilizing count and left and right of the array
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === 0 || nums[left] !== nums[left - 1]) {
      // writing the condition if left is smaller and equal to the right and left is 0 or number to the left of the number is not equal then increasing the count and also the index
      count++;
    }
    left++;
  }
  return count;
};

console.log(uniqueNumber([1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 3]));
