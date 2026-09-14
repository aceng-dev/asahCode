function ExecutorePromise(resolve, rejected){
    setTimeout(() => {
        console.log('Lakukan Sesuatu yang lain sambil menunggu promise');
        
        let mathRandom = Math.random();
    
        if(mathRandom > 0.5){
            resolve('Berhasil');
        }else{
            rejected('Gagal');
        }


    }, 2000);

}
export function doSomething(){
    return new Promise(ExecutorePromise);
}
