module.exports = function (arr) {
  let sum = -Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const curSum = max + arr[i];
    if (curSum > sum) {
      sum = max + arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return sum;
};
