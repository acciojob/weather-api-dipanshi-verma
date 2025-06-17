document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const weatherDiv = document.getElementById('weatherData');

  fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=-0.1278&appid=92f4e9a9c233be99f0b33d1c58c72386&units=metric')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch weather');
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      weatherDiv.innerText = `Current weather in London: ${weather}`;
    })
    .catch(error => {
      weatherDiv.innerText = 'Error fetching weather data';
      console.error(error);
    });
});
