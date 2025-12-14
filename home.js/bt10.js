function mostFrequent(arr) {
  const freqMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  console.log(freqMap);
  

  let maxCount = 0;
  // {1: 3, 2: 1, 3: 2}

  for (let num in freqMap) {
    if (freqMap[num] > maxCount) {
      maxCount = freqMap[num];
    }
  }

  console.log("v", maxCount);
  

  return freqMap[maxCount];
}

console.log(mostFrequent([1, 3, 1, 2, 3, 1]));

// làm lại
