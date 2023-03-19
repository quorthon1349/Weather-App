import { cityList } from "./localStorages.js";
import { render } from "./renders.js";

function addCity(city) {
  cityList.splice(0, 0, {
    id: Date.now(),
    name: city,
  });
}

//удаление из массива
function deleteCity(event) {
  if (event.target.classList.contains("delete-fav-city")) {
    const id = event.target.parentElement.id;
    const index = cityList.findIndex((task) => task.id == id);
    cityList.splice(index, 1);

    render();
  }
}
document.addEventListener("click", deleteCity);

export { addCity };
