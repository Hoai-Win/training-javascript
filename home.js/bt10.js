function mostFrequent(arr) {
  const freqMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  let maxCount = 0;
  let mostFrequentNum = arr[0];

  for (const num in freqMap) {
    if (freqMap[num] > maxCount) {
      maxCount = freqMap[num];
      mostFrequentNum = num;
    }
  }

  return mostFrequentNum;
}

console.log(mostFrequent([1, 3, 1, 2, 3, 1])); 
