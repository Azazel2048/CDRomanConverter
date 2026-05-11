// script.js

function convertirARabico() {
    const romano = document.getElementById("romano").value.toUpperCase();
    const valores = {I:1, V:2, X:10, L:50, C:100, D:500, M:1000};
    let total = 0;

    for (let i = 0; i < romano.length; i++) {
        const actual = valores[romano[i]];
        const siguiente = valores[romano[i+1]];

        if (!actual) {
            document.getElementById("resultado").innerText = "Número romano inválido.";
            return;
        }

        if (siguiente && actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }

    document.getElementById("resultado").innerText = "Resultado: " + total;
}

// ================= TESTEABLES =================

function romanToInteger(romano) {
    if (!romano) throw new Error("Input must be a valid Roman numeral.");

    romano = romano.toUpperCase();
    const valores = {I:1, V:2, X:10, L:50, C:100, D:500, M:1000};

    let total = 0;

    for (let i = 0; i < romano.length; i++) {
        const actual = valores[romano[i]];
        const siguiente = valores[romano[i+1]];

        if (!actual) {
            throw new Error("Input must be a valid Roman numeral.");
        }

        if (siguiente && actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }

    return total;
}

function integerToRoman(num) {
    if (isNaN(num) || num <= 0 || num > 3999) {
        throw new Error("The number must be between 1 and 3999.");
    }

    const mapa = [
        {valor: 1000, simbolo: "M"},
        {valor: 900, simbolo: "CM"},
        {valor: 500, simbolo: "D"},
        {valor: 400, simbolo: "CD"},
        {valor: 100, simbolo: "C"},
        {valor: 90, simbolo: "XC"},
        {valor: 50, simbolo: "L"},
        {valor: 40, simbolo: "XL"},
        {valor: 10, simbolo: "X"},
        {valor: 9, simbolo: "IX"},
        {valor: 5, simbolo: "V"},
        {valor: 4, simbolo: "IV"},
        {valor: 1, simbolo: "I"}
    ];

    let resultado = "";

    for (let i = 0; i < mapa.length; i++) {
        while (num >= mapa[i].valor) {
            resultado += mapa[i].simbolo;
            num -= mapa[i].valor;
        }
    }

    return resultado;
}