module.exports = function getFrequentStrings(arr) {
  const map = new Map();
  let mostFrequentLength = -1;

  for (let i = 0; i < arr.length; i++) {
    const curStr = arr[i];

    if (map.has(curStr.length)) {
      map.get(curStr.length).push(arr[i]);
    } else {
      map.set(curStr.length, [arr[i]]);
    }

    if (
      mostFrequentLength === -1 ||
      map.get(mostFrequentLength).length < map.get(curStr.length).length
    ) {
      mostFrequentLength = curStr.length;
    }
  }

  return mostFrequentLength !== -1 ? map.get(mostFrequentLength) : [];
};
