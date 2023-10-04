function tyhjennaKentta(kenttaId) {
    document.getElementById(kenttaId).value = "";
}

function muunnaLampotila() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const desimaalitRadio = document.querySelector('input[name="desimaalit"]:checked');

    const desimaalit = parseInt(desimaalitRadio.value);

    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5 + 32).toFixed(desimaalit);
        fahrenheitInput.value = fahrenheit;
    } else if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = ((fahrenheit - 32) * 5/9).toFixed(desimaalit);
        celsiusInput.value = celsius;
    } else {
        fahrenheitInput.value = "";
        celsiusInput.value = "";
    }
}


