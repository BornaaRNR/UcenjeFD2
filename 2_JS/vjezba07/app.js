// ponavljanje iteracija, ptelje
// s trenutnim znanjem ispisati 10 puta jedno ispod drugog Edunova

console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");
console.log("Edunova");

// ovako necemo raditi vec cemo nauciti ponavljati naredbe

// klasicna for petlja

//for(inicijalna vrijednost varijable; uvjet izlaska iz petlje; promjena varijable ptelje)

console.log('------------------');

for(let i=0;i<10;i++){
    console.log('Edunova');
}


console.log('------------------');

for(let i=0;i<10;i++) console.log('Edunova');

console.log('------------------');


for(let i=0;i<10;i++){
    console.log(`i=${i+1}`);
}

console.log('------------------');

let suma=0;
for(let i=0;i<10;i++){
    suma += i+1;
    //debugger;// aktiiranje debugger u pregledndiku
}
console.log(suma);
console.log((100*(100+1))/2); //suma prvih 100 brojeva

console.log('------------------');

// ugnjezdivanje petlji
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log(i+1*j+1);
    }
}


//petlju je moguce preskociti i nasilno prekinuti
for(let i=0;i<10;i++){
    if(i==3){
        continue;
    }// continue je nastavi od for a to zapravo znaci da se preskace sve nakon ovog ifa

    if(i==7){
        break; // nije me briga sto treba ici do 10, prekidaj petlju
    }

    // ovdje su zadovoljeni svi uvjeti ostanka u peltji
    console.log(i);
}

console.log('------------------');

// for s nizom
const niz = [1,2,3,4,5,6,7];
//ispisati sve elemente niza
for(let i=0;i<niz.length;i++){
    console.log(niz[i]);
}

console.log('------------------');

// niz unazad
for(let i=niz.length-1;i>=0;i--){
    console.log(niz[i]);
}

// najcesce idemo po elemntima niza od pocetka do kraja i zato postoji pojadnostavljena sintaksa

console.log('------------------');

for(const broj of niz){
    console.log(broj);
}

console.log('------------------');

// for s stringom
const ime= 'Nina';
for(let i=0;i<ime.length;i++){
    console.log(ime[i]);
}

console.log('------------------');

// beskonacna for petlja
let b=0;
for(;;){
    if(b>50){
        break;
    }
    console.log(b++);
}

