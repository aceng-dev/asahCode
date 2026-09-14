function makeCoffee(){
    const estimasiWaktu = 5000;

    const convert = Math.ceil(estimasiWaktu/1000);
    console.log(`Coffe sedang di buatkan dalam ${convert} detik`);

    setTimeout(() => {
        console.log('Coffe Selesai Di Buat');
    }, estimasiWaktu);
}

export {makeCoffee}