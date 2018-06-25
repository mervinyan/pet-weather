import React from 'react';

import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {BrowserRouter as Router} from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/index';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// const cookies = new Cookies();
// const token = cookies.get('token');
// console.log(token);
// if (token) {
//   // Update application state. User has token and is probably authenticated
//   // store.dispatch({ type: AUTH_USER });
// }

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App /> 
    </Router>
  </Provider>, 
  document.getElementById('root'));

