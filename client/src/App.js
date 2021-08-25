import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';

function App() {

  const [ intro, setIntro ] = useState("");

  fetch('/hello')
  .then(response => response.text())
  .then(data => setIntro(data))


  return (
    <div className="App">
      <header className="App-header">
        <p>{intro}</p>
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
    </div>
  );
}

export default App;
