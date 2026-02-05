
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  const x= Number(a);
  const y= Number(b);
  const z= Number(c);
  const w= Number(d);


  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    if((!x && x!=0) && (!y && y!=0)){
    rezultat.innerHTML='Unesite broj u polje A i B'
    return;
   }


   if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
   }

   if(!y && y!=0){
     rezultat.innerHTML='Unesite broj u polje B'
     return;
    }

   if(x>y){
      rezultat.innerHTML=x
    } else if(y>x){
      rezultat.innerHTML = y
    } 
    else{
      rezultat.innerHTML='Brojevi su jednaki'
    }
    return;
  }
//kraj zad 1

  if (zadatak === '2') {  
   if((!x && x!=0) && (!y && y!=0) && (!z && z!=0)){
    rezultat.innerHTML='Unesite broj u polje A, B i C'
    return;
   }

   if((!x && x!=0) && (!y && y!=0)){
    rezultat.innerHTML='Unesite broj u polje A i B'
    return;
   }

   if((!x && x!=0) && (!z && z!=0)){
    rezultat.innerHTML='Unesite broj u polje A i C'
    return;
   }

   if((!y && y!=0) && (!z && z!=0)){
    rezultat.innerHTML='Unesite broj u polje B i C'
    return;
   }

   if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
   }

    if(!y && y!=0){
    rezultat.innerHTML='Unesite broj u polje B'
    return;
   }

    if(!z && z!=0){
    rezultat.innerHTML='Unesite broj u polje C'
    return;
   }

   if(x<y && x<z){
    rezultat.innerHTML=x
   } else if(y<x && y<z){
    rezultat.innerHTML=y
   } else {
    rezultat.innerHTML=z
   }
    return;
  }
  //kraj zad 2

  if (zadatak ==='3'){
    if((!x && x!=0) && (!y && y!=0) && (!z && z!=0) && (!w && w!=0)) {
    rezultat.innerHTML='Unesite broj u polje A, B, C i D'
    return;
    }

    if((!y && y!=0) && (!z && z!=0) && (!w && w!=0)){
    rezultat.innerHTML='Unesite brojeve u polja B, C i D'
    return;
    }

    if((!x && x!=0) && (!z && z!=0) && (!w && w!=0)){
    rezultat.innerHTML='Unesite brojeve u polja A, C i D'
    return;
    }

    if((!x && x!=0) && (!y && y!=0) && (!w && w!=0)){
    rezultat.innerHTML='Unesite brojeve u polja A, B i D'
    return;
    }

    if((!x && x!=0) && (!y && y!=0) && (!z && z!=0)){
    rezultat.innerHTML='Unesite brojeve u polja A, B i C'
    return;
    }

    if((!x && x!=0) && (!y && y!=0)){
    rezultat.innerHTML='Unesite broj u polje A i B'
    return;
    }

    if((!y && y!=0) && (!z && z!=0)){
    rezultat.innerHTML='Unesite broj u polje B i C'
    return;
    }

    if((!z && z!=0) && (!w && w!=0)){
    rezultat.innerHTML='Unesite broj u polje C i D'
    return;
    }

    if((!x && x!=0) && (!w && w!=0)){
    rezultat.innerHTML='Unesite broj u polje A i D'
    return;
    }

    if((!x && x!=0) && (!z && z!=0)){
    rezultat.innerHTML='Unesite broj u polje A i C'
    return;
    }

    if((!y && y!=0) && (!w && w!=0)){
    rezultat.innerHTML='Unesite broj u polje B i D'
    return;
    }

    if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
    }

    if(!y && y!=0){
    rezultat.innerHTML='Unesite broj u polje B'
    return;
    }

    if(!z && z!=0){
    rezultat.innerHTML='Unesite broj u polje C'
    return;
    }

    if(!w && w!=0){
    rezultat.innerHTML='Unesite broj u polje D'
    return;
    }

    const zbroj = x + y + z + w;
    rezultat.innerHTML = `${zbroj}`;
    return;
  }
  //kraj zad 3

  if (zadatak ==='4'){
    if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
    }
    const trenutnaGodina = 2026;
    const dob = trenutnaGodina - x;

    if(dob >= 18){
    rezultat.innerHTML='Punoljetni ste.';
    }else{
    rezultat.innerHTML='Niste punoljetni.';
    }
    return;
  }
  //kraj zad 4

  if (zadatak === '5'){
    if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
    }

    if(x>0){
    rezultat.innerHTML='Broj je pozitivan.';
    }else if(x < 0){
    rezultat.innerHTML='Broj je negativan.';
    }else{
    rezultat.innerHTML='Uneseni broj je nula.';
    }
    return;
  }
  //kraj zad 5
  if (zadatak === '6'){
    if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
    }

    if(x%2 === 0){
    rezultat.innerHTML='Broj je paran.';
    }else{
    rezultat.innerHTML='Broj je neparan.';
    }
    return;
  } 
  //kraj zad 6
  if (zadatak === '7'){
    if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
    }

    if(x>=90 && x<=100){
    rezultat.innerHTML='Ocjena: Odličan';
    }else if(x>=80 && x<90){
    rezultat.innerHTML='Ocjena: Vrlo dobar';
    }else if(x>=70 && x<80){
    rezultat.innerHTML ='Ocjena: Dobar';
    }else if(x>=60 && x<70){
    rezultat.innerHTML='Ocjena: Dovoljan';
    }else if(x>=0 && x<60){
    rezultat.innerHTML='Ocjena: Nedovoljan';
    }else{
    rezultat.innerHTML='Unesite valjan broj bodova (0-100)';
    }
    return;
  }
  //kraj zad 7
  if (zadatak === '8'){
    if((!x && x!=0) && (!y && y!=0)){
    rezultat.innerHTML='Unesite broj u polje A i B'
    return;
    }

    if(!x && x!=0){
    rezultat.innerHTML='Unesite broj u polje A'
    return;
    }

    if(!y && y!=0){
    rezultat.innerHTML='Unesite broj u polje B'
    return;
    }

    if(y === 0){
    rezultat.innerHTML='Nije moguće dijeliti s nulom!';
    return;
    }

    if(x%y === 0){
    rezultat.innerHTML=`Broj ${x} je djeljiv s brojem ${y}. Ostatak je ${x % y}.`;
    }else{
    rezultat.innerHTML=`Broj ${x} nije djeljiv s brojem ${y}.`;
    }
    return;
  }
  //kraj zad 8
  
  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



