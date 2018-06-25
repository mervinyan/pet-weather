import React, { Component } from 'react';
// import Header from './template/header';
// import Footer from './template/footer';
import Main from './main';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        {/* <Header logo="PetWeather" /> */}
        <Main />
        {/* <Footer />  */}
      </div>
    );
  }
}

export default App;  
