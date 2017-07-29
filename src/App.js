import React, { Component } from 'react';

// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import logo from './logo.svg';
import './App.css';

// import components
import MapDisplay from './components/MapDisplay';
import Events from './components/Events';
import Services from './components/Services';
import DogDate from './components/DogDate';
import Breeding from './components/Breeding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to WaggsWorld. Woof.</h2>
        </div>
        <p className="App-intro">
           All Dog. All Day.
        </p>
        <MapDisplay />
        <Events />
        <Services />
        <DogDate />
        <Breeding />
      </div>
    );
  }
}

export default App;

