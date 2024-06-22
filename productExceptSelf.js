//given an array of number we have to find the product leaving the number index is on
var productExceptSelf = function(nums) {
  let leftArr = new Array(nums.length) // we intitialize left and right new array
  let rightArr = new Array(nums.length)
  
  leftArr[0] = 1
  
  for (let i = 1 ; i < nums.length; i++){
      leftArr[i] = leftArr[i - 1] * nums[i - 1]// we are populating the left array while definting the 0th index as 1 because there is no more left number than the 0th index and we are iterating from 1
  }
  
  rightArr[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--){
      rightArr[i] = rightArr[i + 1] * nums[i + 1]// similar in the right array
  }
  
  let answerArr = new Array(nums.length) // defining new answer array
  
  for (let i = 0; i < nums.length; i ++){
      answerArr[i] = leftArr[i] * rightArr[i] // multiplying and storing the numbers in the array
  }
  
  return answerArr
  
 
   
};

console.log(productExceptSelf([1,5,7,8,4,8,4]))