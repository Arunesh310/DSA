// finding and putting the unique elements in front of the array

const uniqueElements = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
};

console.log(uniqueElements([1,567,6,6,6,6,8,8,8,8,3,3,3,3,3,2,2,2,5555,5555,7777,7777]))
