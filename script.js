// LEVEL 1: Modulo Calculator
function calculateModulo() {
    const a = parseInt(document.getElementById('mod-a').value);
    const m = parseInt(document.getElementById('mod-m').value);
    const resBox = document.getElementById('mod-result');

    if (isNaN(a) || isNaN(m)) {
        showResult(resBox, "✖ Harap masukkan bilangan bulat yang valid!", true);
        return;
    }
    if (m <= 0) {
        showResult(resBox, "✖ Modulus (m) harus berupa bilangan bulat positif (> 0)!", true);
        return;
    }

    let result = ((a % m) + m) % m;
    let processText = `[PROSES KALKULASI]\n`;
    processText += `a = ${a}, m = ${m}\n`;
    processText += `Formula: (${a} % ${m} + ${m}) % ${m}\n\n`;
    processText += `[HASIL AKHIR]\n`;
    processText += `${a} mod ${m} = ${result}`;

    showResult(resBox, processText, false);
}

// LEVEL 2: Congruence Checker
function checkCongruence() {
    const a = parseInt(document.getElementById('cong-a').value);
    const b = parseInt(document.getElementById('cong-b').value);
    const m = parseInt(document.getElementById('cong-m').value);
    const resBox = document.getElementById('cong-result');

    if (isNaN(a) || isNaN(b) || isNaN(m)) {
        showResult(resBox, "✖ Harap isi semua kolom input!", true);
        return;
    }
    if (m <= 0) {
        showResult(resBox, "✖ Modulus (m) harus berupa bilangan bulat positif (> 0)!", true);
        return;
    }

    const diff = a - b;
    const isCongruent = (diff % m === 0);

    let text = `[UJI KONGRUENCY]\n`;
    text += `Syarat : m | (a - b)\n`;
    text += `Selisih: (${a} - ${b}) = ${diff}\n`;
    text += `Uji    : ${diff} % ${m} = ${diff % m}\n\n`;
    text += `[KESIMPULAN]\n`;
    text += `${a} ≡ ${b} (mod ${m})\n`;
    text += `Status : ${isCongruent ? "✔ KONGRUEN" : "✖ TIDAK KONGRUEN"}`;

    showResult(resBox, text, false);
}

// LEVEL 5: Number System Calculator
function convertNumberSystem() {
    const inputStr = document.getElementById('num-input').value.trim();
    const base = parseInt(document.getElementById('base-select').value);
    const resBox = document.getElementById('num-result');

    if (!inputStr) {
        showResult(resBox, "✖ Harap masukkan angka/karakter!", true);
        return;
    }

    const regexMap = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9a-fA-F]+$/
    };

    if (!regexMap[base].test(inputStr)) {
        showResult(resBox, `✖ Input "${inputStr}" tidak valid untuk Basis ${base}!`, true);
        return;
    }

    const decValue = parseInt(inputStr, base);

    let text = `[HASIL KONVERSI BASIS ${base}]\n`;
    text += `• Biner (2)   : ${decValue.toString(2)}\n`;
    text += `• Desimal (10): ${decValue.toString(10)}\n`;
    text += `• Oktal (8)   : ${decValue.toString(8)}\n`;
    text += `• Hexa (16)   : ${decValue.toString(16).toUpperCase()}`;

    showResult(resBox, text, false);
}

// LEVEL 6: Combinatorics Calculator
function calculateCombinatorics() {
    const n = parseInt(document.getElementById('comb-n').value);
    const r = parseInt(document.getElementById('comb-r').value);
    const resBox = document.getElementById('comb-result');

    if (isNaN(n) || isNaN(r)) {
        showResult(resBox, "✖ Harap masukkan nilai n dan r!", true);
        return;
    }
    if (n < 0 || r < 0) {
        showResult(resBox, "✖ Nilai n dan r tidak boleh negatif!", true);
        return;
    }
    if (r > n) {
        showResult(resBox, "✖ Syarat tidak terpenuhi! (Harus: 0 ≤ r ≤ n)", true);
        return;
    }

    function factorial(num) {
        let fact = 1n;
        for (let i = 2n; i <= BigInt(num); i++) {
            fact *= i;
        }
        return fact;
    }

    const nFact = factorial(n);
    const rFact = factorial(r);
    const nSubRFact = factorial(n - r);

    const P = nFact / nSubRFact;
    const C = nFact / (rFact * nSubRFact);

    let text = `[PERMITASI & KOMBINASI (n=${n}, r=${r})]\n\n`;
    text += `1. Permutasi P(${n}, ${r})\n`;
    text += `   Rumus : n! / (n - r)!\n`;
    text += `   Hasil : ${P.toString()}\n\n`;
    text += `2. Kombinasi C(${n}, ${r})\n`;
    text += `   Rumus : n! / (r! * (n - r)!)\n`;
    text += `   Hasil : ${C.toString()}`;

    showResult(resBox, text, false);
}

// Helper Output UI
function showResult(element, text, isError) {
    element.className = 'result-box ' + (isError ? 'error' : 'success');
    element.innerText = text;
}