import { getData, postData, CLIENT_ROOT_URL } from './index';

import {
  PET_ERROR,
  FETCH_PETS,
  FETCH_PET_BY_ID,
  FETCH_BREEDS,
  FETCH_PET_TYPES,
  ADD_PET
} from './types';


export function fetchPets() {
  const url = `/pets/`;
  return dispatch => getData(FETCH_PETS, PET_ERROR, false, url, dispatch);
}

export function fetchPet(petId) {
  const url = `/pets/${petId}/weather`;
  return dispatch => getData(FETCH_PET_BY_ID, PET_ERROR, false, url, dispatch);
}

export function fetchPetTypes() {
  const url = `/admin/types`;
  return dispatch => getData(FETCH_PET_TYPES, PET_ERROR, false, url, dispatch);
}

export function fetchBreeds() {
  const url = `/admin/breeds`;
  return dispatch => getData(FETCH_BREEDS, PET_ERROR, false, url, dispatch);
}

export function addPet({ name, type, breed, location }) {
  const data = { name, type, breed, location };
  const url = `/pets`;
  return (dispatch) => {
    postData(ADD_PET, PET_ERROR, true, url, dispatch, data);
    // window.location.href = CLIENT_ROOT_URL + '/pets';
  };
}

