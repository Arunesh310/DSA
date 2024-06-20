// finding the greatest common divisor of two strings and if it is not divisible returning an empty string

var gcdOfStrings = function (str1, str2) {
  if (str2 === "") {
    return str1;
  }
  if (str1.length < str2.length) {
    return gcdOfStrings(str2, str1);
  }
  if (str1.startsWith(str2)) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  }
  return "";
};

str1 = "ABCABC";
str2 = "ABC";

console.log(gcdOfStrings(str1, str2));
