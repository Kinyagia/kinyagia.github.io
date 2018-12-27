import React, { Component } from 'react';
import './App.css';
import mail from './mail.svg';
import github from './github.svg';
import linkedIn from './linkedIn.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <nav> 
	    <ul> 
              <li><a href="#">Home  </a></li> 
              <li><a href="#projects">Projects  </a></li> 
              <li><a href="#about">About </a></li>
              <li><a href="#contacts"> Contacts  </a></li>
            </ul>
          </nav>
          <p>
            Morris Mburu<br/> 
            I am a Front-end dev currently living in Mainz, <br/>
            where I go to School. 
          </p>
          <p id="projects">
           Cool projects,<br/>
           I am currently working on.
          </p>
          <p id="about">
           I&#39;m twenty   <br/>
           My hobbys are Cinema,listening to old timey tunes,
           and Podcasts.
          </p>
          <footer className="contacts" id="contacts">
            <ul>
             <li><img src={mail} className="App-logo" /></li> 
              <li><img src={github} className="App-logo" /></li>  
              <li><img src={linkedIn} className="App-logo" /></li> 
            </ul>
          </footer>
          </div>
    );
  }
}

export default App;
