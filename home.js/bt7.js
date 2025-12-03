const arr = [
  {price: 10},
  {price: 20},
  {price: 5}
];

const totalPrice = arr.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice); 
