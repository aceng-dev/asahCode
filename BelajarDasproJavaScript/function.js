function konversiTemp(temp){
    const calt = (9/5) * temp + 32;
    return calt;
}

const celcius = 90;

console.log(konversiTemp(celcius));

// First-Class-Citizen

function operation(a,b){
    const plus = a + b;
    return plus;
}

function calculate (operation, a , b){
    return operation(a, b);
}

const result = calculate(operation, 10, 20);
console.log(result);

const x  = function(z){
    return function (a){
        return a * z;
    }
}

const y = x(10);
const a = y(20);

console.log(a);

// Arrow Func
const mines = (numA, NumB) => numA - NumB;

console.log(mines(80,90));
