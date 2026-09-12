const user = {
  id: "#1",
  name: "Acel",
  "last name": "Dev",
  email: "acell@gmail.com",
  age: 20,
};

console.log(user.id); // akses key tanpa space
console.log(user["last name"]); // akses key jika ada space

// object destructuring : Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan yang lebih kecil (variabel).
const { id, name, gender = 'Laki Laki' } = user;
console.log(gender);
console.log(name);
user.name = 'Marsel';
console.log(user.name);

//Delate properti
delete user.age;
delete user['last name'];
console.log(user);

