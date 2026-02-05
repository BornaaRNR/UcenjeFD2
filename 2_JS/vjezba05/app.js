// switch je visestruko grananje
// switch radi s svim tipovima podataka i provjerava s ===
// sve sto se moze s switch moze se i s if

const ocjena=4;

switch(ocjena){
    case 1:
        console.log('Nedovoljan');
        break;
    case 2:
        console.log('Dovoljan');
        break;
    case 3:
        console.log('Dobar');
        break;
    case 4:
        console.log('Vrlo dobar');
        break;
    case 5:
        console.log('Izvrstan');
        break;
    default:
        console.log('Nije ocjena');
}

