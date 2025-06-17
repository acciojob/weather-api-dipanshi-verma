document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const weatherDiv = document.getElementById('weatherData');

  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=8f98fcdd76mshfa89c3cceede1a6p1a18fajsn4fc1110edb3a&units=metric')
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].main;
      weatherDiv.innerText = `Current weather in London: ${weather}`;
    })
    .catch(error => {
      weatherDiv.innerText = 'Error fetching weather data';
      console.error(error);
    });
});
