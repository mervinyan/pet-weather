import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import HomePage from './pages/home-page';
import NotFoundPage from './pages/not-found-page';

import PetList from './pet/pet-list';
import PetWeather from './pet/pet-weather';
import AddPet from './pet/add-pet';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Redirect from="/" exact to="/pets" />

          <Route exact path="/pets" component={PetList} />
          <Route exact path="/pets/new" component={AddPet} />
          <Route exact path="/pets/:id" component={PetWeather} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  };
}
