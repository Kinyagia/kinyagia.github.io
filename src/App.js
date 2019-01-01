import React, { Component } from 'react';
import './App.css';

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
           My hobbys include cinema,listening to old timey tunes,
           and podcasts.
          </p>
          <footer className="contacts" id="contacts">
            <ul>
             <a href="mailto: mburumorris@outlook.com" target="_blank" rel="noopener noreferrer" alt="mail">
              <li><img src="https://cdn.staticaly.com/gist/Kinyagia/de7897aec675aa3649f1b3bc70c7a624/raw/45bacd9e92f2e340a11c567c121600d503c2ae16/mail.svg" className="App-logo"/></li>
              </a>
              <a href="https://github.com/kinyagia" target="_blank" rel="noopener noreferrer" alt="github">
              <li><img src="https://cdn.staticaly.com/gist/Kinyagia/1f003c566b57246eb1d870e76572e119/raw/df9e7da35eaa42efcecebc60bb55ca23b4173128/github.svg" className="App-logo" /></li>
              </a>
              <a href="https://www.linkedin.com/in/morris-mburu-8b6a0413a/" target="_blank" rel="noopener noreferrer" alt="linkedIn">
              <li><img src="https://cdn.staticaly.com/gist/Kinyagia/c2c66e6c85fcc78e3aaef8ea9b8191df/raw/b934a0b98cabecccc77aa45dfe2bffac4836daf1/linkedIn.svg" className="App-logo"/></li> 
              </a>
            </ul>
          </footer>
          </div>
    );
  }
}

export default App;
