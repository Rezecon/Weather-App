// Configuration
const API_KEY = '14f6db08e0574e8206df6b1f2bd64de4';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const cityInput   = document.getElementById('city-input');
const searchBtn   = document.getElementById('search-btn');
const weatherCard = document.getElementById('weather-card');
const errorMsg    = document.getElementById('error-msg');
const loadingEl   = document.getElementById('loading');

// search weather
async function fetchWeather(city) {
  showLoading();

  try {
    const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      showError();
      return;
    }

    const data = await response.json();

    displayWeather(data);

  } catch (error) {
    showError();
    console.error('Erro ao buscar clima:', error);
  }
}

// show results
function displayWeather(data) {
  const city        = data.name;
  const country     = data.sys.country;
  const temp        = Math.round(data.main.temp);
  const feelsLike   = Math.round(data.main.feels_like);
  const humidity    = data.main.humidity;
  const wind        = (data.wind.speed * 3.6).toFixed(1); // m/s to km/h
  const tempMin     = Math.round(data.main.temp_min);
  const tempMax     = Math.round(data.main.temp_max);
  const description = data.weather[0].description;

  document.getElementById('city-name').textContent  = city;
  document.getElementById('country').textContent    = country;
  document.getElementById('temp').textContent       = temp;
  document.getElementById('description').textContent = description;
  document.getElementById('feels-like').textContent = `${feelsLike}°C`;
  document.getElementById('humidity').textContent   = `${humidity}%`;
  document.getElementById('wind').textContent       = `${wind} km/h`;
  document.getElementById('minmax').textContent     = `${tempMin}° / ${tempMax}°`;

  hideAll();
  weatherCard.classList.remove('hidden');
}

// Helpers
function showLoading() {
  hideAll();
  loadingEl.classList.remove('hidden');
}

function showError() {
  hideAll();
  errorMsg.classList.remove('hidden');
}

function hideAll() {
  weatherCard.classList.add('hidden');
  errorMsg.classList.add('hidden');
  loadingEl.classList.add('hidden');
}

// Events

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

cityInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const city = cityInput.value.trim();
    if (city){
      fetchWeather(city);
      cityInput.value = '';
    } 
        

  }
});