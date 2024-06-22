// finding three triplets whose indexes are in form i < j < k and the numbers are also in form nums[i] < nums[j] < nums[k] 


var increasingTriplet = function(nums) {

    
  let num1 = Infinity // setting the numbers in form of infinity
  let num2 = Infinity

  for (let i = 0; i < nums.length ; i ++){// comparing the numbers form num3 and checking if they are larger then assigning them to the num3 and moving ahead
      let num3 = nums[i]

      if (num3 <= num1){
          num1 = num3
      }

      else if (num3 <= num2){
          num2 = num3
      }else {
          return true 
      }
  }
  return false
  
};