// reversing the words given in an string

var reverseWords = function (s) {
  let arr = s.trim().split(/\s+/); // for splitting the word without spaces

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr.join(" ");
};

let s = " hello world ";
console.log(reverseWords(s));
