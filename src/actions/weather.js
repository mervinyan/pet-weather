import axios from 'axios';

import { API_URL } from './index';

import {
  WEATHER_ERROR,
  FETCH_WEATHER
} from './types';

const DARK_SKY_SCERET_KEY = '980fc94c1494bf1bb91196ce32ec9c35';

export function fetchWeather(petId) {
  return function (dispatch) {
    let requestUrl = API_URL + '/pets/' + petId;

    let headers = {};
    let pet = {};
    axios.get(requestUrl, headers)
      .then((response) => {
        pet = response.data;
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        let weather_api_url = `https://api.darksky.net/forecast/` + DARK_SKY_SCERET_KEY + `/` + pet.latitude + ',' + pet.longitude;
        return axios.get(proxy + weather_api_url, { headers: { 'Access-Control-Allow-Origin': '*' } });
      })
      .then((response) => {
        let weather = response.data.currently.summary;
        dispatch({
          type: FETCH_WEATHER,
          payload: {pet: pet, weather: weather},
        });
      })
      .catch((error) => {
        let errorMessage = error.data.error;
        dispatch({
          type: WEATHER_ERROR,
          payload: errorMessage
        });
      });
  }
}