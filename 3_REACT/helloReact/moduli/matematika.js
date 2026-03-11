export const PI = 3.14 // iz ove dadoteke je moguce napraviti import varijable PI

export function zbroji(a,b){ // iz ove datoteke moguce je napraviti import funkcije
    return a+b
}

export default function pozdrav(ime){  // ovo je zadana funkcije iz ove dadoteke i za nju kod importa netreba koristiti {} zagrade
    return `Hello, ${ime}`
}

function prva(){
    return `Ovo vidim jer je napravljen export. ${druga()}`
}

function druga(){
    return 'Ovo ne vidim izvan matematika.js'
}

export {prva}