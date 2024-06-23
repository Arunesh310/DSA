// In this problem we are only reversing the vowels in the word and changing there position

var reverseVowels = function (s) {
  const vowels = {};

  for (const char of "aeiouAEIOU") {
    vowels[char] = true;
  }

  let arr = s.split("");

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && !vowels[arr[left]]) {
      left += 1;
    }

    while (left < right && !vowels[arr[right]]) {
      right -= 1;
    }

    if (left < right) {
      swap(arr, left, right);
      left += 1;
      right -= 1;
    }
  }

  return arr.join("");
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let s = "hello";
console.log(reverseVowels(s));


