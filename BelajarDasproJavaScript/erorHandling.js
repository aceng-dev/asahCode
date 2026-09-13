// trhow eror

// const price = 10;
// const paid = 8;
// if(paid < price){
//     throw new Error('pembayaran kurang');
// }

//CATCHING ERROR
try {
    console.log('Program Start');
    throw new Error('Eror bang');
    console.log('Program end');
} catch (err) {
    console.log('Program eror, sisa kode di abaikan');
}

try {
  console.log('Ini try block');
  throw new Error('Error: Program berhenti');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}
