import axios from 'axios';

export const getWeather = id => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&lang=ru&units=metric&APPID=04396a6162f4cbfb469bf546ebfc29cb`
  )
}