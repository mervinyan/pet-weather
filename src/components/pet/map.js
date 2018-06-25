import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import dog from './dog.png';
import cat from './cat.png';

import './pet.css';

const PetMarker = ({ name, type }) => 
  <div>
    <img className="img-responsive" src={type === 'dog' ? dog : cat} alt={name}/>
  </div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 50.445211, lng: -104.618894 },
    zoom: 11
  };

  render() {
    return (
      <div style={{ width: 400 + 'px', height: 400 + 'px' }} className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBrmIWy8nAs_VoR4E5vqRsSzjPuIPJjqdM'
          }}

          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {this.props.pets.map((pet, index) => (
            <PetMarker
              key={index}
              lat={pet.latitude}
              lng={pet.longitude}
              name={pet.name}
              type={pet.type.name.toLowerCase()}
            >
            </PetMarker>
          ))}

        </GoogleMapReact>
      </div>
    )
  }
}