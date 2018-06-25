import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchPetTypes, fetchBreeds, addPet } from '../../actions/pet';

const renderField = field => (
  <div className="col-xs-8 col-sm-9">
    <input className="form-control" {...field.input} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

function validate(formProps) {
  const errors = {};

  if (!formProps.name) {
    errors.name = 'Please enter name';
  }

  if (!formProps.type) {
    errors.type = 'Please select a type';
  }

  if (!formProps.breed) {
    errors.breed = 'Please select a breed';
  }

  if (!formProps.location) {
    errors.location = 'Please enter a location';
  }

  return errors;
}

class AddPet extends Component {
  constructor(props) {
    super(props);
    this.props.fetchBreeds();
    this.props.fetchPetTypes();

    this.state = {
      name: undefined,
      type: undefined,
      breed: undefined,
      location: undefined,
      breeds: [],
      filteredBreeds: []
    }
  }

  componentWillMount() {
    console.log(this.props);
    this.setState({
      breeds: this.props.breeds,
      filteredBreeds: this.props.breeds
    })
  }

  handleFormSubmit(formProps) {
    this.props.addPet(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  renderMessage() {
    if (this.props.message) {
      return (
        <div className="alert alert-success">
          <span><strong>Yeah!</strong> {this.props.message}</span>
        </div>
      );
    }
  }

  handleTypeChange = e => {
    let filteredBreeds = this.props.breeds.filter(breed => breed.type._id == e.target.value);
    this.setState({
      type: e.target.value,
      filteredBreeds: filteredBreeds
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
          <form className="form-horizontal" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <h2 className="text-center">Add your pet</h2>
            {this.renderAlert()}
            {this.renderMessage()}
            <div className="form-group">
              <label className="col-xs-4 col-sm-3 control-label text-right">Name</label>
              <Field name="name" className="form-control" component={renderField} type="text" />
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-sm-3 control-label text-right">Type</label>
              <div className="col-xs-8 col-sm-9">
                <Field name="type" component="select" className="form-control" onChange={this.handleTypeChange.bind(this)}>
                  <option></option>
                  {this.props.types &&
                    this.props.types.map((type, index) => (
                      <option key={index + 1} value={type._id}>{type.name}</option>
                    ))}
                </Field>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-sm-3 control-label text-right">Breed</label>
              <div className="col-xs-8 col-sm-9">
                <Field name="breed" className="form-control" component="select">
                  <option></option>
                  {this.state.filteredBreeds &&
                    this.state.filteredBreeds.map((breed, index) => (
                      <option key={index + 1} value={breed._id}>{breed.name}</option>
                    ))}
                </Field>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-sm-3 control-label text-right">Location</label>
              <Field name="location" className="form-control" component={renderField} type="text" />
            </div>
            <div className="controls text-center">
              <button type="submit" className="btn btn-primary">Add My Pet</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.pet);
  return {
    types: state.pet.types,
    breeds: state.pet.breeds,
    errorMessage: state.pet.error,
    message: state.pet.message
  };
}

const form = reduxForm({
  form: 'addPet',
  validate
});

export default connect(mapStateToProps, { fetchPetTypes, fetchBreeds, addPet })(form(AddPet));  
