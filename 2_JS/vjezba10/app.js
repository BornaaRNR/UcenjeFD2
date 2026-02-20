// rekurzija - kada funkcija poziva samu sebe uz uvjet zavrsetka rekurzije

// ono sto znamo
// zbrojiti prvih 100 brojeva

let suma =0;
for(let i=0;i<100;i++){
    suma +=i;
}
console.log(suma);

function zbroji(broj){
    if(broj===1){
        return 1;
    }
    return broj+zbroji(broj-1);
}

console.log(zbroji(100));


// stackoverflow
function so(){
    so();
}
so();