function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.intro = function (){
    console.log(`Nama Saya ${this.name} Umur Saya ${this.age}`);
}

const person1 = new Person('Acel', 20);

person1.intro();