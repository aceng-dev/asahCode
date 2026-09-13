// for loop
// for (let i = 0;i < 10; i++){
//     console.log(`Nilai ke - ${i}`);
// }

const users = {
    id : '#1',
    name : 'Acell',
    email : 'marsel@gmail.com',
}

for(const key in users){
    console.log(`${key} Bernilai : ${users[key]}`)
}

const lastAmountUsers = ['296','402','507'];

for(const value of lastAmountUsers){
    console.log(value);
}

// While loop
let i = 0;

while(i < 5){
    console.log(`Angka ke ${i}`);
    i++
}

let j = 0;
//do while loop
do{
    console.log(`Angka ke ${j}`);
    j++
}while (j < 5);

for(let i = 0; i < 10;i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
