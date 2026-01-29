//operatori

//aritmeticki operatori + - * /

const a = 2, b = 3; //deklaracija varijabli
let rez; //deklaracija prazne varijable
rez = a + b; //zbrajanje
console.log(rez);

// modulo operator (%)
//ostatak nakon cjelobrojnog dijeljenja
console.log(9 % 2); //1
console.log(8 % 2); //0

// operatori dodjele = += -= *= /= %=
// = je operator dodjeljivanja . Desna strana se dodjeljuje lijevoj strani
rez = rez + 2;
console.log(rez); //7

rez+=2; //isto kao rez = rez + 2
console.log(rez); //9

const x = 2;
rez -= x; //isto kao rez = rez - x
console.log(rez); //7

//uvecanje za 1
rez = rez +1; //isto kao rez = rez + 1
rez +=1; //isto kao rez = rez + 1
rez++; //isto kao rez = rez + 1

// increment (++) i decrement (--)
//imaju dvojaku ulogu: Koristenje i uvecanje/umanjivanje

//koristiti pa uvecati
console.log(rez++); //ispisuje 10, pa onda uvecava rez na 11
console.log(rez); //ispisuje 11

//uvecati pa koristiti
console.log(++rez); // 12

//koristiti pa umanjiti
console.log(rez--); // 12

//umanjiti pa koristiti
console.log(--rez); // 10

//znalo biti na razgovorima za posao
let i = 2, j =1;
i =j++ - i;
j += --i - ++j;
console.log(i-j); //1


// operatori usporedivanja
// == jednako po vrijednosti 
// === jednako po vrijednosti i po tipu
console.log(5 == 5); //  true
console.log('5' === 5); //true
console.log(3 == 7); //false
console.log('Osijek' === 'osijek'); //false
console.log(5 === '5'); //false


// razlicito !=
console.log(3 != 5); // true

// <,>,<=, >=
let godine = 18;
console.log(godine > 18); //false
console.log(godine >= 18); //true



// dva izraza koja mogu biti true ili false
// logickim operatorima
// bool-ovi operatori: AND, OR i NOT (I, ILI i NE)
console.log(godine >= 18); //true
console.log(godine >= 21); //false
// punoljetan u svim drzavama
// logicki AND (I) && -> u JS se ne smije koristit &
console.log(godine >= 18 && godine >=21); // false

//logicki OR (ili) |
//console.log(i1 || i2); //true

//console.log(!i1); //false

// ternarni operator ( ? : )
godine = 16;
console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan');

// operator spajanja (nadolijepljivanja) - contatenation
const skola = 'Edunova';
console.log('Najbolja skola je ' + skola); // ovo se ne preporuca
console.log(`Najbolja skola je ${skola}`);
const razred = 4;
console.log('Idem u ' + razred + '. razred');
console.log(`Idem u ${razred}. razred`);

//spred operator - operator prosirivanja (...)
const niz = [2,2,1,1]; // varijablu niz ne smijem mijenjati
console.log(niz);
const noviNiz = [0, ...niz, 3];
console.log(noviNiz);

//na objektu
const osoba ={
    ime: 'Pero',
    prezime: 'Peric'
};
console.table(osoba);

const polaznik = {
    ...osoba,
    edukacija: 'Frontend developer'
}
console.table(polaznik);

//suprotno od spread operator je postupak koji se zove destructing
const [prvi, drugi] = [1,2]; //s desne strane u nizu se nalaze dva elementa a ja reka s lijeve strane napravi dvije varijable i dodjeli im vrijednosti s desne strane
console.log(prvi);
console.log(drugi);

//objekt
const {prezime, ...objektBezPrezimena} = polaznik; //razbij ga na dvije varijable. 1. je prezime 2. je objekt bez prezimena koji ima sva svojstva od polaznika (desna strana) osim prezimena.
console.table(objektBezPrezimena);
// start ili nusproizvod
console.log(prezime);


// nillish calescing operator (??)
// ako je vrijendost varijable null koristi nesto drugo
let sifra=null;
console.log(sifra ?? 'Sifra nije definirana')

// backend vrati sifru
sifra = '6B29FC40-CA47-1067-B31D-00DD010662DA';
console.log(sifra ?? 'Sifra nije definirana');

// optional chaining operator (?.)
// malo kompleksniji JSON
const korisnik ={
    adresa: {
        grad: 'Osijek',
        //ulica: 'Jegerova'
    }
}

console.table(korisnik);
console.log(korisnik.adresa.grad);// Osijek
// console.log(korisnik.adresa.ulica.toUpperCase());// JEGEROVA
// ?. mi pomaze da ne dobijem gresku
console.log(korisnik?.adresa?.ulica?.toUpperCase());


// dva posebna operatora u JS: typeof i instanceof
const n = [2,3];
console.log(typeof n); //object
console.log(n instanceof Array); //true

// in operator: provjerava u objektu postoji li svojstvo
console.log('prezime' in osoba); // true
console.log('prezime' in objektBezPrezimena); //false


//0101 binarno je 5
//0011 binarno je 3
//0111 binarno je 7
const binarno = 5 | 3; // ovo nije logicki ILI vec je bitwise (binarni) operator kao sto postoji i &
console.log(binarno);

//0101 binarno je 5
//0011 binarno je 3
//0001 binarno je 1
console.log(5 & 3);

