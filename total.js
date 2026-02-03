const products = [
  { name: "Shampoo", price: 300, quantity: 5 },
  { name: "Chiruni", price: 100, quantity: 2 },
  { name: "Shirt", price: 500  , quantity: 3 },
  { name: "Pant", price: 1100  , quantity: 1 },
];
function getTotal(products) {
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  return total;
}
console.log(getTotal(products));
