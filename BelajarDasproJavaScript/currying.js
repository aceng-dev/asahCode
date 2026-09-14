function multiple(a){
    return function(b){
        return a * b;
    }
}

const multipleBy = multiple(5);
const multipleByFive = multipleBy(10);

console.log(multipleByFive);