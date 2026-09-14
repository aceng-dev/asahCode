class Smartphones{
    constructor(merk, color){
        this.merk = merk;
        this.color = color;
    }
    charging(){
        console.log(`${this.merk} Sedang Mengisi Daya`);
    }
}

class Android extends Smartphones{
    constructor(merk, color, device){
        super(merk,color);
        this.device = device;
    }

    charging(){
        super.charging();
        console.log(`${this.device} dengan merek ${this.merk}`)
    }
}

const android = new Android('QLED Tv', 'Hitam', 'TV');
android.charging();