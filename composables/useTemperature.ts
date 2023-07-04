function temperatureInCelsius(temperature: number) {
    return temperature + ' °C'
}

function temperatureInFahrenheit(temperature: number) {
    return (temperature * 9) / 5 + 32 + ' °F'
}

export { temperatureInCelsius, temperatureInFahrenheit }
