function plus(x){
    return x + x;
}

function multiple(x){
    return x * x;
}

function compose(g, f){
    return (x) =>{
        return g(f(x));
    }
}

const plusAndMultiple = compose(multiple, plus);

console.log(plusAndMultiple(3));

// Bukan currying
const arrayAsli = [1,2,3,4,5];

const arrayBaru = arrayAsli.map((element) => element * 2);

console.log(arrayBaru);