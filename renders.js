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
} from "./localStorages.js";

let cityNowStorage = checkStorageNow();
let cityDetailsStorage = checkStorageDetails();
let favoriteCitiesStorage = cityListStorage();

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
