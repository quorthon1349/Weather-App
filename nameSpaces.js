//серверные данные
const SERVER = {
  SERVER_URL: "https://api.openweathermap.org/data/2.5/weather",
  API_KEY: "f472e0295e1d8eb30cf0021a2bb22aac",
  FORECAST_URL: "https://api.openweathermap.org/data/2.5/forecast",
};

//ошибки
const ERROR = {
  TRY_AGAIN: " Ошибка! Попробуйте повторить запрос позже",
  ADD_INVALID_CITY: "Нельзя добавить пустой город!",
};
export { SERVER, ERROR };
