// nizovi su struktura podataka
// niz omogocuje pohranjivanje vise vrijednosti  jednoj varijabli

//prazan niz
const prazanNiz = [];
console.log(prazanNiz);

// potreba unosa 12 temperatura u godini dana
const temperature = [-2, 2, 10, 15, 21, 26, 28, 31, 28, 19, 10, 4];
console.log(temperature);

// cesto me zanima samo ukupan broj elemenata: length
console.log(temperature.length);

// niz ima pojam index i on pocinje s 0
console.table(temperature);

// prvi element je na idenksu 0 kao i u c++
// zadnji element je na lenght-1


// koristenje pojedinog elementa
// ispisi 1. element
console.log(temperature[0]);


const zadnji = temperature.length-1;

// ipisi zadnji element
console.log(temperature[zadnji]);

// cesce se koristi ovo
console.log(temperature[temperature.length-1]);

// const se ne moze mijenjati
// kod nizova to znaci da ga ne mogu redeklarirati niti promjeniti tip
// temperature=[2,2];
// temperature='Osijek';

// ispraviti sijecanjsku temperaturu na -1
temperature[0] = -1;
console.table(temperature);

// niz moze imati sve tipove podatka i mogu biti mjesani

// ponavljanje tipova podataka ptp

// const ptp={
//     10, // number
//     'Osijek', // string
//     true, // boolean
//     symbol('id'),// jedinstvena vrijednost
//     undefined, //nedefinirano
//     null, // objekt nema vrijednost
//     [], // array
//     {ime: 'Edunova'}, // object
//     18n, // bigint
// };

// u JS u nizovima moze biti zarez nakon zadnjeg elementa
console.table(ptp);

// ovo gore su sve jednodimenzionalni nizovi (lista, vektor)

//nizovi u JS mogu teoretski imati beskonacni broj dimenzija

// 2D niz je tablica (matrica)

const tablica = [
    [1,2,3], // index reda 0
    [4,5,6], // index reda 1
    [7,8,9] //index reda 2
];


// u 2D nizu prvo ide red pa u redu kolona

//ispisati vrijednost 7
console.log(tablica[2][0]);

// umjesto vrijednosti 6 postaviti 11

tablica = [1][2] = 11;

console.table(tablica);

// 3D niz je kocka

// 4D niz je tenzor

// 1D s 10 elemenata ima ukupno 10 vrijednosti
// 2D s 10x10 ima ukupno 100
// 3D s 10x10x10 ima ukunpo 1000
// 4D s 10x10x10x10 ima ukupno 10000
