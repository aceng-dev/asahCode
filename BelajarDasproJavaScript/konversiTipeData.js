// KONVERSI EKSPLISIT 
// String
let number = 10;
let boolean = true;

let str = String(number); // Function
let toStr = boolean.toString(); // Method 

console.log(str); 
console.log(toStr);

//Number

let strNum = '30px';

const funcNum = Number(strNum);
const parsNum = parseInt(strNum);

console.log(funcNum);
console.log(parsNum);

//Boolean
let bfrBoolean = "1";
let bfrBooleann = 0;

const aftrBoolean = Boolean(bfrBoolean);
const aftrBooleann = Boolean(bfrBooleann);

console.log(aftrBoolean);
console.log(aftrBooleann);

// Berikut nilai falsy yang ada di js : 
/* 
false
0
-0
0n
''
null
undefined
NaN
*/

// KONVERSI IMPLISIT

let age = 20;
let numStr = "123";
const multipleStr = 2 * numStr; 

console.log(`Saya berumur ${age}`);
console.log(multipleStr);


