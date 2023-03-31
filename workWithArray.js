import { cityList } from "./localStorages.js";
import { render } from "./renders.js";

function addCity(city) {
  cityList.splice(0, 0, city);
  // cityList.splice(0, 0, {
  //   id: Date.now(),
  //   name: city,
  // });
}

//удаление из массива
function deleteCity(event) {
  if (event.target.classList.contains("delete-fav-city")) {
    const name = event.target.parentElement.textContent;
    const index = cityList.findIndex((task) => task == name);
    cityList.splice(index, 1);
    render();
  }
}
document.addEventListener("click", deleteCity);

export { addCity };
