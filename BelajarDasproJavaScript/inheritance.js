class Smartphone {
    constructor(model, brand , color ){
        this.model = model;
        this.brand = brand;
        this.color = color;
    }
    charging(){
        console.log(`Smartphone model ${this.model} dengan brand ${this.brand} sedang mengisi daya`);
    }
}
// Inheritance
class Android extends Smartphone{
    splitScreen(){
        console.log('Android punya fitur splitscreen');
    }
}
class iOS extends Smartphone{
    airDrop(){
        console.log('Ios punya fitur airdrop');
    }
}

const android = new Android('J2 Prime', 'Samsung', 'Silver');
const ios = new iOS('Pro Max', 'iPhone 12', 'Hitam');

android.charging();
android.splitScreen();
