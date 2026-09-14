function rekursi(n){
    if(n<0){
         const wadah = [];
         return wadah;
    }

    return [...rekursi(n-1),n]  ;
}
console.log(rekursi(5));