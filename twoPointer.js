// finding if the sum of two elements of array is zero

// brute force approach

const sumZero1 = (arr) => {
    for (let i = 0; i < arr.length; i ++){
        for (let j = arr.length - 1; j > i; j--){
            if (arr[i] + arr[j] === 0){
                return [i, j]
            }
            
        }
    }
    return undefined
}

console.log(sumZero1([-1,0,1]))

// optimized approach

const sumZero = (arr) => {
  let left = 0
  let right = arr.length - 1
  
  let sum = arr[left] + arr[right]
  
  if (sum === 0){
      return [arr[left], arr[right]]
  }else if (sum > 0) {
      right --
  }else {
      left ++
  }
}

console.log(sumZero([-1,0,1]))