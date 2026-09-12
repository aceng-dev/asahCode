const obj1 = {name : 'Acel', age : 20};
const obj2 = { tall : 169};
const newObj = {...obj1,...obj2};
console.log(newObj);

const arr1 = ['Apel','Mangga','Jambu'];
const arr2 = ['Anggur'];
const newArr = [...arr1,...arr2];
console.log(newArr);

// spread adalah sintaks yang berfungsi menyebarkan nilai dari sebuah objek

