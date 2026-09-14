
//  Before Es6
// class coffeeMachine{
//     constructor(waterAmount){
//         this.waterAmount = waterAmount;
//         this._temperature = 90;
//     }

//     set temperature(temperature){
//         console.log(`Kamu tidak di izinkan mengganti dengan nilai ${temperature}`);
//     }
    
//     get temperature(){
//         return this._temperature;
//     }
// }

// const americano = new coffeeMachine(100);

// console.log(americano.temperature);
// americano.temperature = 20;
// console.log(americano.temperature);

// After ES6
// class coffeeMachine{
//     #temperature = 90;
//     constructor(waterAmount){
//         this.waterAmount = waterAmount;
//         this.#temperature = this.#defaultTemperature();
//     }

//     set temperature(temperature){
//         console.log(`Kamu tidak di izinkan mengganti dengan nilai ${temperature}`);
//     }
    
//     get temperature(){
//         return this.#temperature;
//     }
//     #defaultTemperature(){
//         return this.#temperature;
//     }
// }

// const americano = new coffeeMachine(100);
class sistemRegis{
    #panjangPassword = Array.from('12345678')
    daftarUser(email, password){
    if(this.#verifEmail(email) && password.length >= this.#verifPassword() ){
       const passwordAman =  this.#hashPassword(password);
        this.#simpanKeDatabase(email, passwordAman);
        console.log('Registrasi Berhasil');
    }else{
        console.log('Email atau password tidak valid');
    }
    }
    #verifEmail(email){
        return email.includes('@gmail.com');
    }
    #verifPassword(){
        return this.#panjangPassword.length
    }
    #hashPassword(password){
        return '###' + password + '###';
    }
    #simpanKeDatabase(email,password){
    console.log(`Menyimpan ${email} Ke database dengan password ${password}`); 
    }
}

const users1 = new sistemRegis();
users1.daftarUser('Acell@gmail.com', 'aCengggg');


