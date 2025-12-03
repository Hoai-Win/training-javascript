function mergeObjects(obj1, obj2) {
  const result = {...obj1}; 

  for (const key in obj2) {
    if (result.hasOwnProperty(key)) {
      result[key] += obj2[key]; 
    } else {
      result[key] = obj2[key]; 
    }
  }

  return result;
}

console.log(mergeObjects({a: 1, b: 2}, {a: 3, c: 5})); 
