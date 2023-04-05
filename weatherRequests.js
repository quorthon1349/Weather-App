import {
  form,
  favoriteCity,
  addFavoriteCityButton,
  enterCityField,
  temp,
} from "./constants.js";

import { SERVER, ERROR } from "./nameSpaces.js";

import {
  renderNow,
  cityNowStorage,
  renderDetails,
  cityDetailsStorage,
  render,
  renderForecast,
  cityForecastStorage,
} from "./renders.js";

import { cityList } from "./localStorages.js";
import { addCity } from "./workWithArray.js";

//запрос для первого таба 
async function cityNowRequest(event, currentCity, temperature, cityNameData) {
  event.preventDefault();
  const cityName = cityNameData;
  const url = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
try {
  const promise = await fetch(url)
  const response =await promise.json()
  renderNow(response.main.temp, response.name, response.weather[0].icon);
  const input = document.querySelector(".search-field");
    input.value = "";
  }catch (error) {
  alert(new Error(ERROR.TRY_AGAIN))
  }
}

//запрос для 2го таба
async function cityDetailsRequest(event, cityNameData) {
  event.preventDefault();
  const cityName = cityNameData;
  const url = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  try {
    const promise = await fetch(url)
    const response =await promise.json()
    renderDetails(
    response.name,
    response.main.temp,
    response.main.feels_like,
    response.weather[0].main,
    response.wind.speed,
    response.sys.sunrise,
    response.sys.sunset
  );
  console.log(response);
  } catch (error) {
    alert(new Error(ERROR.TRY_AGAIN))
  }
}
//запрос для 3го таба
async function cityForecastRequest(event, cityNameData) {
  event.preventDefault();
  const cityName = cityNameData;
  const urlForecast = `${SERVER.FORECAST_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  try {
    const promise=await fetch(urlForecast);
    const response= await promise.json()
    renderForecast(response);
    console.log(response);
  } catch (error) {
    alert(new Error(ERROR.TRY_AGAIN))
  }
}

//отправка запросов
form.addEventListener("submit", () => {
  cityNowRequest(event, favoriteCity, temp, enterCityField.value);
  cityDetailsRequest(event, enterCityField.value);
  cityForecastRequest(event, enterCityField.value);
});

function addCityToFavorite() {
  if (favoriteCity.textContent === "") {
    return alert(ERROR.ADD_INVALID_CITY);
  }
  addCity(favoriteCity.textContent);
  render();
}
addFavoriteCityButton.addEventListener("click", addCityToFavorite);

// запрос из избранных городов
function requestFromFavoriteList(event) {
  if (event.target.classList.contains("city-fav")) {
    const name = event.target.parentElement.textContent;
    if (cityList.findIndex((city) => city[name] === name)) {
      cityNowRequest(event, favoriteCity, temp, name);
      cityDetailsRequest(event, name);
      cityForecastRequest(event, name);
    }
  }
}
document.addEventListener("click", requestFromFavoriteList);

renderNow(cityNowStorage.temperature, cityNowStorage.city, cityNowStorage.img);
renderDetails(
  cityDetailsStorage.name,
  cityDetailsStorage.temperature,
  cityDetailsStorage.feelsLikeTemp,
  cityDetailsStorage.weather,
  cityDetailsStorage.wind,
  cityDetailsStorage.sunrise,
  cityDetailsStorage.sunset
);
renderForecast(cityForecastStorage.response);
