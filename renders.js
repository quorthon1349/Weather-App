import {
  imgLink,
  favoriteCity,
  temp,
  tempDetails,
  feelsLikeTemperature,
  typeOfWeather,
  windSpeed,
  sunriseTime,
  sunsetTime,
} from "./constants.js";

import {
  checkStorageNow,
  checkStorageDetails,
  cityList,
  cityListStorage,
  checkStorageForecast,
} from "./localStorages.js";

let cityNowStorage = checkStorageNow();
let cityDetailsStorage = checkStorageDetails();
let favoriteCitiesStorage = cityListStorage();
let cityForecastStorage = checkStorageForecast();

function renderNow(temperature, city, img) {
  favoriteCity.textContent = city;
  temp.textContent = Math.round(temperature);

  imgLink.src = `https://openweathermap.org/img/wn/${img}@4x.png`;
  cityNowStorage = { temperature, city, img };
  localStorage.setItem("cityNow", JSON.stringify(cityNowStorage));
}

function renderDetails(
  temperature,
  feelsLikeTemp,
  weather,
  wind,
  sunrise,
  sunset
) {
  tempDetails.textContent = Math.round(temperature);
  feelsLikeTemperature.textContent = Math.round(feelsLikeTemp);
  typeOfWeather.textContent = weather;
  windSpeed.innerHTML = wind + " m/s";
  sunriseTime.textContent = getData(sunrise);
  sunsetTime.textContent = getData(sunset);
  cityDetailsStorage = {
    temperature,
    feelsLikeTemp,
    weather,
    wind,
    sunrise,
    sunset,
  };
  localStorage.setItem("cityDetails", JSON.stringify(cityDetailsStorage));
}
//преобразование времени для заката и рассвета
function getData(e) {
  e = e * 1000;
  return `${new Date(e).getHours()}:${new Date(e).getMinutes()}`;
}

function renderForecast(response) {
  const collector = document.querySelector(".more-weather-info-field");
  collector.textContent = "";

  for (let item = 0; item < 5; item++) {
    const infoContainerHTML = `<div class="more-weather-info">
    <div class="date-and-time">
      <p class="time-and-data">${response.list[item].dt_txt}</p>
    </div>
    <div class="main-details-about-weather">
      <div class="feels-like-and-temperature">
        <p>
          Temperature:
          <span class="temperatures">${Math.round(
            response.list[item].main.temp
          )}</span>&#176;
        </p>
        <p>
          Feels like:
          <span class="feels-like">${Math.round(
            response.list[item].main.feels_like
          )}</span>&#176;
        </p>
      </div>
      <div class="downfall">
        <p class="weather-describe">${response.list[item].weather[0].main}</p>
        <img
          class="weather"
          src="https://openweathermap.org/img/wn/${
            response.list[item].weather[0].icon
          }@4x.png"
          alt=""
        />
      </div>
    </div>
  </div>`;
    collector.insertAdjacentHTML("beforeend", infoContainerHTML);
  }
  cityForecastStorage = { response };
  localStorage.setItem("cityForecast", JSON.stringify(cityForecastStorage));
}

//рендер избранного
function render() {
  const favoriteCitiesCollection = document.querySelector(
    ".favorite-cities-collector"
  );
  deleteCitiesFromArray();
  cityList.forEach((city) => {
    const cityHTML = `<li class="favorite-city" id="${city.id}"><span class="city-fav">${city.name}</span><button class="delete-fav-city"></button></li>`;
    favoriteCitiesCollection.insertAdjacentHTML("beforeend", cityHTML);
  });
  //createElements
  localStorage.setItem("cityList", JSON.stringify(cityList));
}
//очистка для рендера
function deleteCitiesFromArray() {
  let clear = document.querySelector(".favorite-cities-collector");
  clear.textContent = "";
}

export { renderNow, cityNowStorage };
export { cityDetailsStorage, renderDetails };
export { render };
export { renderForecast, cityForecastStorage };

