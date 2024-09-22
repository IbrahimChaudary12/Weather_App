document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h3>Weather in ${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.log('Error:', error);
            document.getElementById('weatherResult').innerHTML = '<p>Failed to retrieve data. Please try again later.</p>';
        });
});
