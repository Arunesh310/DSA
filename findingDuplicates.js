// in this problem we are returning true and false based on if the element is repeating in array or not

let duplicates = (arr) => {
    
  if (arr.length === 0) return false
  
  let object = {}
  
  for (let i of arr){
      object[i] = (object[i] || 0) + 1
  }
  
  for (let property in object){
      if (object[property] === 2){
          return true
      }
  }
  return false

}


