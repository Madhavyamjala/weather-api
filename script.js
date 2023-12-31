document.addEventListener('DOMContentLoaded', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '840caa793bmshdfa2774fd0d0658p1fdbabjsn40c3cf4a731c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const cityInput = document.getElementById('city-input');
    const submitButton = document.getElementById('submit');

    const getWeather = (city) => {
        document.getElementById("cityname").innerHTML = city;
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                updateWeatherData(response);
            })
            .catch(err => console.error(err));
    };

    function updateWeatherData(data) {
        document.getElementById('cloud_pct').innerHTML = data.cloud_pct;
        document.getElementById('temp').innerHTML = data.temp;
        document.getElementById('feels_like').innerHTML = data.feels_like;
        document.getElementById('humidity').innerHTML = data.humidity;
        document.getElementById('min_temp').innerHTML = data.min_temp;
        document.getElementById('max_temp').innerHTML = data.max_temp;
        document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
        const sunriseDate = new Date(data.sunrise * 1000); // Convert seconds to milliseconds
        const sunriseTime = formatTime(sunriseDate);
        document.getElementById('sunrise').innerHTML = `${sunriseTime}`;
        const sunsetDate = new Date(data.sunset * 1000); // Convert seconds to milliseconds
        const sunsetTime = formatTime(sunsetDate);
        document.getElementById('sunset').innerHTML = `${sunsetTime}`;
        document.getElementById('wind_speed').innerHTML = data.wind_speed;
    }

    function formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        getWeather(cityInput.value);
    });

    getWeather("Kukatpally");
});
