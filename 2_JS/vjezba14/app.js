
// Generator funkcije su posebna vrsta funkcije koje se mogu zaustaviti i nastaviti
// * oznacava da je generator
function* primjerGenerator(){
    console.log('Pocetak rada generatora');
    yield true; // 1. pauza
    yield 2.8; // 2. pauza
    yield 1; // 3. pauza
    return 'Gotov';
}
// ovdje se funkcija ne izvrsava
const generator = primjerGenerator(); // konzola prazna
/* console.log(generator.next()); // next() je poziv do prvog yield
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); */

// provjera uvjeta na izlasku iz petlje - osigurano je minimalno jedno izvodenje

let g;
do{
    g = generator.next();
    console.log(g.value);
}while(!g.done);

function* sljedeciID(){
    let id=1;
    while(true){
        yield `ID_${id++}`;
    }
}

const id = sljedeciID();

console.log(`Sljedeci ID: ${id.next().value}`);

for(let i=0;i<10;i++){
    console.log(`Sljedeci ID u petlji: ${id.next().value}`);
}

function* razgovor(){
    let odgovor;
    while(true){
        odgovor = yield 'Kako se zoves?';
        console.log(`generator kaze: Drago mi je, ${odgovor}`);
    }
}

const chat = razgovor();
// 1. pokreni generator do 1. yield 
let pitanje = chat.next().value;
console.log(pitanje); // prvi puta ispisati: Kako se zoves;
pitanje = chat.next('Marko'). value;
console.log(pitanje);

console.log(chat.next('Marija').value);