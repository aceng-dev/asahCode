const users = new Map([
    ['name', 'Acel'],
    ['age', 18],
    ['gender', 'Laki Laki'],
]);

users.set('email', 'marsel@gmail.com');
console.log(users);

console.log(users.get('name'));

users.delete('email');
console.log(users);