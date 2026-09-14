const myArray = new Array(10);
const users = new Array('Acel','Marsel','Aceng');

const copyArray = Array.from(users);
console.log(copyArray);

const literalArr = ['Apel','Mangga','Durian'];
console.log(literalArr[0]);

// Push data
myArray.push(1);
console.log(myArray[10]);

// Delate Data
delete copyArray[0];
console.log(copyArray)
copyArray.splice(0,2);
console.log(copyArray)

literalArr.shift();
console.log(literalArr);
users.pop();
console.log(users);

// Array Destructuring
const [firstPerson, secondPerson] = users;
console.log(firstPerson);

// Array method
const alphabet = [1,2,3,4,5,6,7,10,50]
alphabet.reverse();
console.log(alphabet);
console.log(alphabet.sort());
console.log(alphabet.length);
let panjang ='satuduatiga';
console.log(panjang.length)