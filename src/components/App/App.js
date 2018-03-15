import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      user: {
        name: 'Mary',
        city: 'Kissimmee'
      } 
    };

    // Need line below to make `this` available inside the handleChange method
    this.logUser = this.logUser.bind(this);

    // Don't need to bind this for handleChangeFor because it is a property not a class method.
    //this.handleChangeFor = this.handleChangeFor.bind(this);
  }

  // handleNameChange(event) {
  //   console.log("event target.id", event.target.id);
  //   this.setState( { 
  //     user: { 
  //       ...this.state.user,
  //       name: event.target.value,
  //     } 
  //   });
  // }

  // handleCityChange(event) {
  //   console.log("event target.id", event.target.id);
  //   this.setState( { 
  //     user: { 
  //       ...this.state.user,
  //       city: event.target.value 
  //     } 
  //   });
  // }

  handleChangeFor = (propertyName) => (event) => {
    this.setState( { 
      user: { 
        ...this.state.user,
        [propertyName]: event.target.value 
      } 
    } );
  }

  logUser() {
    console.log("User info:", this.state.user);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <br />
          <input onChange={this.handleChangeFor('name')} id="name" placeholder="name" type="text" />
          <input onChange={this.handleChangeFor('city')} id="city" placeholder="city" type="text" />
          <button onClick={this.logUser}>Submit</button>
          <p className="App-intro">
            { this.state.user.name } is from { this.state.user.city }.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
