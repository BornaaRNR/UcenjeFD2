
// OOP - Objektno orjentirano programiranje

// Probajte se natjerati napamet nauciti sto je klasa, a sto objekt

// I1: Klasa je opisnik objekta
class Osoba{
    // # oznacajavu skriveno privatno svojstvo
    // OOP princip Ucahurivanje (encapsulation)
    // 1. Klasa ce sakriti svoja svojstva
    #ime;

    // OOP princip Ucahrivanje (encapsulation)
    // 2. Klasa ce unistiti svoja svojstva dostupna pute get set metoda
    get ime(){return this.#ime;}
    set ime(s){this.#ime=s;}

    // poziva se s kljucnom rjecju new
    constructor(ime=''){
        if(ime.length>0){
            this.#ime = ime;
        }
    }
}

// I2: Objekt je pojavnost (instanca) klase
// varijabla osoba je instanca klase Osoba
const osoba = new Osoba(); // new je poziv konstruktora
const datum= new Date();
osoba.ime = 'Pero';
osoba.prezime = 'Peric';
console.log(osoba.ime);

const o = new Osoba('Durdica');
console.log(o.ime);


// OOP princip: Nasljedivanje
// klasa ce naslijediti metode nadklase, jedna klasa moze naslijediti samo jednu nadklasu
class Polaznik extends Osoba{
    #odradioObaveze;
    get odradioObaveze() {return this.#odradioObaveze}
    set odradioObaveze(b) {this.#odradioObaveze = b;}

    constructor(ime='', oo=false){
        super(ime);
        this.#odradioObaveze = oo;
    }
}

const p = new Polaznik('Karlo',true);
console.log(p.ime, p.odradioObaveze);

class Predavac extends Osoba{
    #vrsta;
    get vrsta(){return this.#vrsta;}
    set vrsta(s){this.#vrsta=s;}
    constructor(ime='',vrsta=''){
        super(ime);
        if(vrsta.length>0){
            this.#vrsta=vrsta;
        }
    }
    toString(){
        return `${this.vrsta} ${super.ime}`;
    }
}

const pr = new Pradavac('Pero Peric','vanjski suradnik');

console.log(pr);
console.log(`$(pr)`);

// OOP princip Viseoblcije (polimorfizam)
// vise citati o OOP na
// https://github.com/tjakopec/OOP_JAVA_PHP_PHYTON_SWIFT

console.log(Math.random());

// Ideja objekata jest da spremaju stanje u svoja svojstva i pamte ga
// Postoji situacija kada ne treba spremati stanje vec samo implementirati neki algoritam

class Pomocno{
    static slucajniBroj(){
        // dolazi logika slucajnog broja, ima negdje
        return 7;
    }
}

console.log(Pomocno.slucajniBroj());
