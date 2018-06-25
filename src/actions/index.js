import axios from 'axios';

export const API_URL = (process.env.API_URL || (process.env.REACT_APP_HOST + ':3000')) + '/api';

export function errorHandler(dispatch, error, type) {
  console.log('Error Type: ', type);
  console.log(error);

  let errorMessage = error.data.error;

  dispatch({
    type,
    payload: errorMessage
  });
}

// Post Request
export function postData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;

  let headers = {};

  // if (isAuthReq) {
  //   headers = { headers: { Authorization: cookies.get('token') } };
  // }

  axios.post(requestUrl, data, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}

export function getData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;

  let headers = {};
  // let headers = { headers: { Locale: 'en' } };

  // if (isAuthReq) {
  //   headers = { headers: { Authorization: cookies.get('token') } };
  // }

  axios.get(requestUrl, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}

// Put Request
export function putData(action, errorType, isAuthReq, url, dispatch, data) {
  const requestUrl = API_URL + url;

  let headers = {};

  // if (isAuthReq) {
  //   headers = { headers: { Authorization: cookies.get('token') } };
  // }

  axios.put(requestUrl, data, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}


export function deleteData(action, errorType, isAuthReq, url, dispatch) {
  const requestUrl = API_URL + url;

  let headers = {};

  // if (isAuthReq) {
  //   headers = { headers: { Authorization: cookies.get('token') } };
  // }

  axios.delete(requestUrl, headers)
    .then((response) => {
      dispatch({
        type: action,
        payload: response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}


