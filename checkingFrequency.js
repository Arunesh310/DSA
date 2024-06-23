// In this problem we have to compare two no. and return true and false according to the frequency of no.s are same or not in both the no.s
let sameFrequency = (num1, num2) => {
  let arr1 = num1.toString().split("")
  let arr2 = num2.toString().split("")
  
  let frequency1 = {}
  let frequency2 = {}
  
  if (arr1.length !== arr2.length) return false
  
  for (let num of arr1){
      frequency1[num] = (frequency1[num] || 0) + 1
  }
  
   for (let num of arr2){
      frequency2[num] = (frequency2[num] || 0) + 1
  }
  
  for (let key in frequency1){
      if (frequency1[key] !== frequency2[key]){
          return false
      }
  }
  return true
  
}


console.log(sameFrequency(189, 981))