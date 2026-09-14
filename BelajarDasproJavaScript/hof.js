function applay ( operation, ...args){
    return operation(...args);
}

function sum(a,b,c){
    return a + b + c;
}

function discount(disc, value){
      return value - ((disc / 100) * value);
}

const sumProductPrice = applay(sum, 100,300,200);
const disc = applay(discount, 25, sumProductPrice);
console.log(`Harga barang sebelum di beri diskon : ${sumProductPrice} `);
console.log(`Harga barang setelah di beri diskon 25% : ${disc}`);


