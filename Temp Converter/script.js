function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const unitFrom = document.getElementById('unitFrom').value;
    let result = '';

    if (unitFrom === 'celsius') {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (inputTemp * 9/5) + 32;
        result = `${inputTemp}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (unitFrom === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        const celsius = (inputTemp - 32) * 5/9;
        result = `${inputTemp}°F = ${celsius.toFixed(2)}°C`;
    }

    document.getElementById('result').textContent = result;
}
