import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPets } from '../../actions/pet';
import Map from './map';

import './pet.css';

class PetList extends Component {

  componentWillMount() {
    this.props.fetchPets();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="h1 text-center">
          Does My Pet Need An Umbrella?
        </div>
        <div className="h4 text-center">
          Select a pet to find out.
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading" >
                <div className="row">
                  <div className="col-xs-8 col-sm-6">Name</div>
                  <div className="visible-sm visible-md visible-lg col-sm-3">Type</div>
                  <div className="col-xs-4 col-sm-3">Breed</div>
                </div>
              </div>
              <div className="panel-body">
                {this.props.pets.map((pet, index) => (
                  <div key={index} className="row pet-row">
                    <div className="col-xs-8 col-sm-6"><a href={`/pets/${pet._id}`}>{pet.name}</a></div>
                    <div className="visible-sm visible-md visible-lg col-sm-3">{pet.type.name}</div>
                    <div className="col-xs-4 col-sm-3">{pet.breed.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Link to="/pets/new"> Add New Pet</Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Map pets={this.props.pets} />
            <hr />
            <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </div>
        </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pets: state.pet.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetList);