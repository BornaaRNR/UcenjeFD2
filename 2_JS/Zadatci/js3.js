document.getElementById('btnIzvrsi').addEventListener('click', function() {
    // 1. Deklaracija niza i prikupljanje vrednosti iz inputa
    const inputi = document.querySelectorAll('.input-grid input'); //koristim querySelectionALL kako bi uzeo sva 4 polja
    let niz = [];

    // 2. Punjenje niza vrednostima koje su brojevi
    inputi.forEach(input => {
        let broj = parseFloat(input.value);
        
        // Proveravamo da li je unos zaista broj (da nije prazno ili NaN)
        if (!isNaN(broj)) {
            niz.push(broj);
        }
    });

    const display = document.getElementById('rezultatBox');

    if (niz.length === 0) {
        display.innerHTML = "Niz je prazan. Unesite barem jedan broj.";
        display.style.color = "#e74c3c";
    } else {
        let zbroj = 0;
        for (let i = 0; i < niz.length; i++) {
            zbroj += niz[i];
        }
        display.innerHTML = `Niz: [${niz.join(', ')}] Zbroj niza je: ${zbroj} `;
        display.style.color = "#2c3e50"; // Tamno plava/siva
    }
});

// DODATAK: Sprečavanje unosa slova 'e' u sva polja
document.querySelectorAll('input[type="number"]').forEach(el => {
    el.addEventListener('keydown', function(e) {
        if (e.key === 'e' || e.key === 'E') {
            e.preventDefault();
        }
    });
});