// in this problem we are checking the repetition of characters and then storing the repetitions in a form of string and returning the characters of input array

var compress = function(chars) {
  if (chars.length === 0) return 0; // edge case
  
  let index = 0; 
  let count = 1; 
  
  for (let i = 1; i <= chars.length; i++) {
      if (i < chars.length && chars[i] === chars[i - 1]) {// we are checking and increasing the count if two strings are same
         
          count++;
      } else {
         
          chars[index++] = chars[i - 1]; // else we are increasing the index and assigning it the new charter
          
          if (count > 1) {
             
              let countStr = count.toString();
              for (let j = 0; j < countStr.length; j++) {
                  chars[index++] = countStr[j];
              }// finally converting the result in the array and storing the answer
          }
          
          
          count = 1;
      }
  }
  
 
  return index;
};

// console.log(compress(["a","a","b","b","c","c"])); 
