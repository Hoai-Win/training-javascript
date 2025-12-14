// tham chiếu là gì
// tham trị là gì
// biến nguyên thuỷ -> string, number, boolean ...
// không nguyên thuỷ -> object, array, func

// function mergeObjects(obj1, obj2) {
//   const result = {...obj1}
//   for (const key in obj2) {
//     if (result.hasOwnProperty(key)) {
//       result[key] += obj2[key]; 
//     } else {
//       result[key] = obj2[key]; 
//     }
//   }

//   return result;
// }

// const obj1 = {a: 1, b: 2}
// const obj2 = {a: 3, c: 5}
// console.log('init', obj1);
// console.log(mergeObjects(obj1, obj2)); 
// console.log('->>>>>',obj1);
// console.log('->>>>>',obj2);


const ob1 = {a: 1, b: 2}
const ob2 = ob1
ob2.a = 5
console.log(ob1, ob2);


