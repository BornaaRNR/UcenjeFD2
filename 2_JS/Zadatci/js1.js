document.getElementById('btnIzvrsi').addEventListener('click', function() {
    
    const a = parseFloat(document.getElementById('poljeA').value); //koristim parsefloat kako bi pretvorio tekst u broj
    const b = parseFloat(document.getElementById('poljeB').value);
    const c = parseFloat(document.getElementById('poljeC').value);
    const d = parseFloat(document.getElementById('poljeD').value);
    
    const display = document.getElementById('rezultatBox');

    if (!isNaN(a) && !isNaN(b)) {
        let povrsina = a * b;
        let formatiraniRezultat = povrsina.toFixed[3];

        formatiraniRezultat = parseFloat(formatiraniRezultat);
        
        display.innerHTML = "Površina pravokutnika sa stranicama " + a + " i " + b + " iznosi: <strong>" + povrsina + "</strong>";
        display.style.color = "#2ecc71";
    } else {
        display.innerHTML = "Greška: Molimo unesite ispravne brojeve u polja A i B.";
        display.style.color = "#e74c3c";
    }
});