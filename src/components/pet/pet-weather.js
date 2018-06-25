import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions/weather';

import dog_raincoat from './dog_raincoat.jpg';
import cat_umbrella from './cat_umbrella.jpg';

import './pet.css';

class PetWeather extends Component {
  constructor(props) {
    super(props);

    const params = this.props.match.params;
    this.props.fetchWeather(params.id);

  }

  render() {
    if (this.props.pet) {
      return (
        <div className="container-fluid">
          <div className="h1 text-center">
            {this.props.weather.toLowerCase === 'rainy' ? 'Yup!' : 'Nope!'}
          </div>
          <div className="h4 text-center">
            {this.props.weather.toLowerCase() === 'rainy' &&
              <img className="img-responsive" src={this.props.pet.tpye.toLowerCase() === 'dog' ? dog_raincoat : cat_umbrella} />
            }
            <p>The weather in {this.props.pet.location} is {this.props.weather} </p>
            <p>
              It looks like {this.props.pet.name} is {this.props.weather === 'Rainy' ? '' : 'not '} going to need one in {this.props.pet.location}.
            </p>
            <br />
          </div>
          <div className="h4 text-center">
            <p>
              <a href="/pets"> Lookup a different pet</a>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      )
    }

  }
}

function mapStateToProps(state) {
  console.log(state.weather);
  return {
    pet: state.weather.pet,
    weather: state.weather.weather
  };
}

export default connect(mapStateToProps, { fetchWeather})(PetWeather);