import { makeCoffee, sendCoffee } from "./callback2.js";

console.log('Aku memesan Coffee');

makeCoffee( () =>{
    sendCoffee(()=>{
        console.log('Aku Minum dan mengahbiskan nya');
    })
}
);

