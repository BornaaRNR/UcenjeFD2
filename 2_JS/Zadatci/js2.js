document.getElementById('btnIzvrsi').addEventListener('click', function() {
    // 1. Dohvatamo vrednost iz polja A i spremamo je u 'a'
    const a = parseFloat(document.getElementById('poljeA').value); 
    const display = document.getElementById('rezultatBox');

    // 2. Provera da li je korisnik uopšte uneo broj
    if (isNaN(a)) {
        display.innerHTML = "Molimo unesite broj u Polje A.";
        display.style.color = "#e74c3c"; // Crvena za grešku
        return;
    }

    // 3. Glavna logika (koristimo 'a' svuda umesto 'poljeA' ili 'broj')
    if (a > 0) {
        display.innerHTML = "Broj " + a + " je pozitivan.";
        display.style.color = "#27ae60"; // Zelena
    } 
    else if (a < 0) {
        display.innerHTML = "Broj " + a + " je negativan.";
        display.style.color = "#2980b9"; // Plava
    } 
    else {
        display.innerHTML = "Uneseni broj je nula.";
        display.style.color = "#757575"; // Siva
    }
});