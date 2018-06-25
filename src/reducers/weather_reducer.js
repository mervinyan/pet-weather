import { FETCH_WEATHER, WEATHER_ERROR } from '../actions/types';

const INITIAL_STATE = { message: '', error: ''};

export default function (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
   
    case FETCH_WEATHER:
      return { ...state, pet: action.payload.pet, weather: action.payload.weather };
    case WEATHER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
