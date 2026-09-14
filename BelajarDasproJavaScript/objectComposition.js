class character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.position = 0;
    }
    canMove(){
        console.log(`${this.name} berada di posisi ${this.#Move()}`)
    }
    #Move(){
        return this.position += 1;
    }
}

function canAttack(char){
    return {
        attack : () => {
            console.log(`${char} menyerang`);
        }
    }
}
function canDefend(char){
    return {
        defend : () => {
           console.log(`${char} bertahan`);
        }
    }
}
function canSpell(char){
    return {
        spell : () => {
            console.log(`${char} mengeluarkan sihir`);
        }
    }
}

function createWarior(name){
    const warior = new character(name);
    return Object.assign(warior, canAttack(warior.name));
}
function createDefender(name){
    const defender = new character(name);
    return Object.assign(defender, canDefend(defender.name));
}

const warior = createWarior('Warior');
warior.attack();
warior.canMove();
warior.canMove();