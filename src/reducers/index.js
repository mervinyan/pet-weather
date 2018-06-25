import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form';  
import petReducer from './pet_reducer';
import weatherReducer from './weather_reducer';

const rootReducer = combineReducers({  
  form: formReducer,
  pet: petReducer,
  weather: weatherReducer
});

export default rootReducer;  
