import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	  <nav> 
	    <ul> 
              <li><a href="#">Home  </a></li> 
              <li><a href="#">Projects  </a></li> 
              <li><a href="#">About </a></li>
              <li><a href="#"> Contacts  </a></li>
          </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      <div className="body">
      </div>	
      </div>
    );
  }
}

export default App;
