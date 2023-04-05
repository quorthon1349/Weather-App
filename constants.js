const form = document.querySelector(".search-area");
const favoriteCity = document.querySelector(".fav-city-name");
const addFavoriteCityButton = document.querySelector(".fav");
const enterCityField = document.querySelector(".search-field");

const temp = document.querySelector(".tempValue");
const imgLink = document.querySelector(".cloud");
//for 2nd request
const cityDetailsName = document.querySelector(".city-details-name");
const tempDetails = document.querySelector(".info-temp");
const feelsLikeTemperature = document.querySelector(".feels-like-temp");
const typeOfWeather = document.querySelector(".type-of-weather");
const windSpeed = document.querySelector(".wind-speed");
const sunriseTime = document.querySelector(".sunrise-time");
const sunsetTime = document.querySelector(".sunset-time");
//for 3rd request
const cityForecastName = document.querySelector(".city-forecast-name");

export {
  form,
  favoriteCity,
  addFavoriteCityButton,
  enterCityField,
  temp,
  imgLink,
  tempDetails,
  feelsLikeTemperature,
  typeOfWeather,
  windSpeed,
  sunriseTime,
  sunsetTime,
  cityDetailsName,
  cityForecastName,
};
