//your JS code here. If required.


document.getElementById('getWeatherBtn').addEventListener('click', () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=19.075975&lon=72.87738&appid=92f4e9a9c233be99f0b33d1c58c72386`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch weather data.');
      }
      return response.json();
    })
    .then((data) => {
      const weather = data.weather[0].main;
      document.getElementById('weatherData').innerText =
        `Current weather in London: ${weather}`;
    })
    .catch((error) => {
      document.getElementById('weatherData').innerText =
        'Error fetching weather data. Please try again.';
      console.error(error);
    });
});
