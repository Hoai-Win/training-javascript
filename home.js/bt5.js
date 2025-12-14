const array = [3,7,2,9];
// const max = Math.max(...array);
// console.log(max)
// let 
// const
// var 
console.log('array:', array)

let max = 0
for(let i = 0; i <= array.length - 1; i++) {
  console.log('index:', i)
  if(max < array[i]) {
    console.log("value:", array[i])
    max = array[i]
  }
}
console.log("result:", max)
