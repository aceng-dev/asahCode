const mySet = new Set([1,2,3])

mySet.add(4);
console.log(mySet);

for(const number of mySet){
    console.log(number);
}

mySet.forEach((Values) => console.log(Values));

mySet.delete(4);
mySet.forEach((Values) => console.log(Values));

