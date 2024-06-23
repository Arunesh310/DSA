// we have to move all the zeroes to the end of the array

let moveZeroes = (nums) => {
  let j = 0
  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== 0){
      nums[j] = nums[i]
      j++

    }
  }
  for (let i = j; j < nums.length; j++){
    nums[i] = 0
  }
  return nums
}