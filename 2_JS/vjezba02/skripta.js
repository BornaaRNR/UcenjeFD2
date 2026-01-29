
const ime = `Boki` //prompt('Unesite svoje ime');

console.log(typeof ime , ime);

console.log(`Dobar dan ${ime}!`);

const unosGodina = `2026`;

const godina = Number(unosGodina);

console.log(typeof godina , godina+1);
console.log(typeof unosGodina , unosGodina+1);


const cijeliBroj = parseInt('7');
console.log(typeof cijeliBroj , cijeliBroj);

const decimalniBroj = parseFloat('3.14');

console.log(typeof decimalniBroj , decimalniBroj);

const logickaVrijednost = true;

console.log(typeof logickaVrijednost , logickaVrijednost);

//logickaVrijednost = false;

//const logickaVrijednost = false;

let broj = 7;
console.log(typeof broj , broj);
broj = 8;
console.log(typeof broj , broj);

broj = '7'; 
console.log(typeof broj , broj);

//let broj = true;

var x = 8;
console.log(typeof x , x);
x = '8';
console.log(typeof x , x);
var x = true;// moze se redeklarirati
console.log(typeof x , x);

const velikBroj = 1234567890123456789012345678901234567890n;
console.log(typeof velikBroj , velikBroj);

let i;
console.log(typeof i , i);

i = 7;
console.log(typeof i , i);

let o = null;
console.log(typeof o , o);
o = 8;
console.log(typeof o , o);



o= {
    id: 1001,
    ime: 'Pero',
    prezime: 'Peric',
    znaProgramirati: false
};
console.log(typeof o , o);
console.table(o);

let niz = [2,2,3,2,2];
console.log(typeof niz , niz);
console.table(niz);

const backend = [
    {
        id: 1,
        ime: 'Ana',
        prezime: 'Generacija',
        znaProgramirati: true
    },
    {
        id: 2,
        ime: 'Karlo',
        prezime: 'Peric',
        znaProgramirati: false
    },
    {
        id: 3,
        ime: 'Maja',
        prezime: 'Katic',
        znaProgramirati: false
    }
];

console.log(typeof backend , backend);
console.table(backend);

function pozdrav() {
    console.log('Pozdrav 1');
}
console.log(typeof pozdrav , pozdrav);
pozdrav();

const pozdravi = () => console.log('Pozdrav 2');
console.log(typeof pozdravi , pozdravi);
pozdravi();

const kompleksnije = (x,y) => {
    x = x + 3;
    y = --y + x;
    return x + y;
};
console.log(typeof kompleksnije(2,2));

const id1 = Symbol('edunova');
const id2 = Symbol('Edunova');
console.log(typeof id1 , id2);

console.log(id1 == id2);
console.log(id1 === id2);