function makeCoffee(callback){
    const estimasiWaktu = 5000;

    const convert = Math.ceil(estimasiWaktu/1000);
    console.log(`Coffe sedang di buatkan dalam ${convert} detik`);

    setTimeout(() => {
        console.log('Coffe Selesai Di Buat');

        callback();
    }, estimasiWaktu);
}
function sendCoffee(callback){
    const estimationTime = 2000;

  console.log('Pramusaji sedang mengantarkan kopi pesanan');

  setTimeout(() => {

    console.log('Pramusaji sudah sampai ke meja.');
    callback();
  }, estimationTime);
}
export {makeCoffee, sendCoffee}