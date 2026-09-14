const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
 const filter = products.filter((element) => element.category === category );
 return filter; 
}

function findProductById(products, id) {
  const find =  products.find((element) => element.id === id);
  return find;
}

function calculateTotalPrice(products) {
  const reduce = products.reduce((acc, elemen) => acc + elemen.price, 0);
  return reduce;
}

function applyDiscount(products, discount) {
    const disc = products.map((element) => {
        return{
            ...element,
            price : element.price - (discount / 100) * element.price
        }
    })
    return disc;
}

console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3
