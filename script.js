document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const weatherDiv = document.getElementById('weatherData');

  // Simulate API delay
  weatherDiv.innerText = 'Fetching weather data...';

  setTimeout(() => {
    // Simulated weather result
    const simulatedWeather = 'Clouds';
    weatherDiv.innerText = `Current weather in London: ${simulatedWeather}`;
  }, 1000);
});
