import { render } from "./renders.js";

let cityList = [];

function checkStorageNow() {
  if (JSON.parse(localStorage.getItem("cityNow")) !== null) {
    return JSON.parse(localStorage.getItem("cityNow"));
  } else {
    return {
      temperature: 0,
      city: "",
      img: "02d",
    };
  }
}

function checkStorageDetails() {
  if (JSON.parse(localStorage.getItem("cityDetails")) !== null) {
    return JSON.parse(localStorage.getItem("cityDetails"));
  } else {
    return {
      name: "None",
      temperature: 0,
      feelsLikeTemp: 0,
      weather: "None",
      wind: "0",
      sunrise: "-",
      sunset: "-",
    };
  }
}

function cityListStorage() {
  if (localStorage.getItem("cityList")) {
    cityList = JSON.parse(localStorage.getItem("cityList"));
    render();
  }
}

function checkStorageForecast() {
  if (JSON.parse(localStorage.getItem("cityForecast")) !== null) {
    return JSON.parse(localStorage.getItem("cityForecast"));
  } else {
    return;
    // { responce:  };
  }
}

export {
  checkStorageNow,
  checkStorageDetails,
  cityListStorage,
  cityList,
  checkStorageForecast,
};
