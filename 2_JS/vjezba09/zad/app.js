function ucitajBroj(b){
  const b2=Number(b);
  if(!b2){
    rezultat.innerHTML="Nisi unio broj";
    return false;
  }

  if(b2<2 || b2>100){
    rezultat.innerHTML="Broj nije u zadanom rasponu, ponovi unos"
    return false;
  }
  return b2;
}

  const zadaci={
    z1:(a,b)=>{
      //1. ispisi apsolutnu vrijednost razlike brojeva A i B
      // console.log('Zadatak 1');
      const a1=ucitajBroj(a);
      if(!a){
        return;
      }
      const b1=ucitajBroj(b);
      if(!b){
        return;
      }
      rezultat.innerHTML= Math.abs(a-b);

    },
    z2:(a,b)=>{
      console.log('Zadatak 2');

    },
    z3:(a,b)=>{
      console.log('Zadatak 3');

    },
    z4:(a,b)=>{
      console.log('Zadatak 4');

    },
    z5:(a,b)=>{
      console.log('Zadatak 5');

    }
    // ovdje dodajemo nove zadatke
  }


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if(!(('z' + zadatak) in zadaci)){
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
