// checking and placing flowers in the adjacent plots of the given array and updating them with 1

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      i++;
    }
    if (count >= n) {
      return true;
    }
  }

  return count >= n;
};

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;

console.log(canPlaceFlowers(flowerbed, n));
