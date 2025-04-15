export class Weather {
    constructor(weatherElem, weatherElemSensacion, weatherElemMin, weatherElemMax) {
        this.weatherElem = weatherElem;
        this.weatherElemSensacion = weatherElemSensacion;
        this.weatherElemMin = weatherElemMin;
        this.weatherElemMax = weatherElemMax;
    }

    populateWeather() {
        this.fetchWeather()
            .then(res => {
                this.weatherElem.textContent = "Montevideo, Uruguay: " + (res.main.temp - 273.15).toFixed(1) + "°C"
                this.weatherElemSensacion.textContent = "Sensacion Termica: " + (res.main.feels_like - 273.15).toFixed(1) + "°C"
                this.weatherElemMin.textContent = "Minima: " + (res.main.temp_min - 273.15).toFixed(1) + "°C"
                this.weatherElemMax.textContent = "Maxima: " + (res.main.temp_max - 273.15).toFixed(1) + "°C"
            })
    }

    async fetchWeather() {
        return await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-34.867&lon=-56.167&appid=c268926197781bc8f8765202c6d3ae95")
            .then(res => res.json())
    }
}