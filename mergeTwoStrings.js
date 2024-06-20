// merge two string alternatively and then print the string again if one string is longer than other then print the remaining words in the last

var mergeAlternately = function (word1, word2) {
  let arr1 = word1.split("");
  let arr2 = word2.split("");
  let merged = [];

  let maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      merged.push(arr1[i]);
    }

    if (i < arr2.length) {
      merged.push(arr2[i]);
    }
  }

  return merged.join("");
};

let word1 = "hello";
let word2 = "world";

console.log(mergeAlternately(word1, word2));
