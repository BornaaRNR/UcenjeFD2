let ocjeneNiz = [];
let ciljaniBrojOcjena = 0;

const btn = document.getElementById('btnIzvrsi');
const inputBroj = document.getElementById('brojOcjena');
const inputOcjena = document.getElementById('trenutnaOcjena');
const sekcijaZaOcjene = document.getElementById('unosOcjeneSekcija');
const display = document.getElementById('rezultatBox');

btn.addEventListener('click', function() {
    // Ako još nismo postavili koliko ocjena želimo
    if (ciljaniBrojOcjena === 0) {
        ciljaniBrojOcjena = parseInt(inputBroj.value);

        if (isNaN(ciljaniBrojOcjena) || ciljaniBrojOcjena <= 0) {
            display.innerHTML = "Molimo unesite ispravan broj ocjena.";
            ciljaniBrojOcjena = 0;
            return;
        }

        // Priprema sučelja za unos ocjena
        inputBroj.disabled = true;
        sekcijaZaOcjene.style.display = "block";
        display.innerHTML = `Unesite 1. ocjenu od ukupno ${ciljaniBrojOcjena}.`;
        btn.innerText = "DODAJ OCJENU";
        return;
    }

    // Unos pojedinačne ocjene
    let ocjena = parseFloat(inputOcjena.value);

    if (isNaN(ocjena) || ocjena < 1 || ocjena > 5) {
        display.innerHTML = "Molimo unesite ispravnu ocjenu (1-5).";
        return;
    }

    ocjeneNiz.push(ocjena);
    inputOcjena.value = ""; // Brišemo polje za sljedeći unos

    if (ocjeneNiz.length < ciljaniBrojOcjena) {
        display.innerHTML = `Uneseno ${ocjeneNiz.length}/${ciljaniBrojOcjena}. <br> Sljedeća ocjena?`;
    } else {
        // Izračun prosjeka kad su sve ocjene tu
        let suma = 0;
        for (let i = 0; i < ocjeneNiz.length; i++) {
            suma += ocjeneNiz[i];
        }
        let prosjek = suma / ocjeneNiz.length;

        display.innerHTML = `
            <strong>Gotovo!</strong><br>
            Sve ocjene: [${ocjeneNiz.join(', ')}]<br>
            <strong>Prosjek: ${prosjek.toFixed(2)}</strong>
        `;

        // Resetiranje za novi krug
        btn.innerText = "POKRENI PONOVO";
        btn.onclick = () => location.reload();
    }
});