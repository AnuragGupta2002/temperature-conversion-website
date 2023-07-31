function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput');
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('result');
    const temperature = parseFloat(temperatureInput.value);
    
    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }

    let convertedTemperature;
    if (conversionType === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature} Celsius is equal to ${convertedTemperature.toFixed(2)} Fahrenheit.`;
    } else if (conversionType === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature} Fahrenheit is equal to ${convertedTemperature.toFixed(2)} Celsius.`;
    }
}
