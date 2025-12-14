const arr = [
  {price: 10},
  {price: 20},
  {price: 5}
];

const totalPrice = arr.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice);

let sum = 0
for(let i = 0; i <= arr.length - 1; i++) {
  sum += arr[i].price
}

console.log(sum);
