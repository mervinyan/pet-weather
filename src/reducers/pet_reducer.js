import { FETCH_PETS, FETCH_PET_BY_ID, FETCH_PET_TYPES, FETCH_BREEDS, ADD_PET, PET_ERROR } from '../actions/types';

const INITIAL_STATE = { message: '', error: '', pets: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PETS:
      return { ...state, pets: action.payload.pets };
    case FETCH_PET_BY_ID:
      return { ...state, pet: action.payload.pet };
    case FETCH_PET_TYPES:
      return { ...state, types: action.payload.types };
    case FETCH_BREEDS:
      return { ...state, breeds: action.payload.breeds };
    case ADD_PET:
      return { ...state, message: action.payload.message };
    case PET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
