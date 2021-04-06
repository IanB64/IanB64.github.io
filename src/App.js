import React from 'react';
import './App.css';
import GithubCorner from 'react-github-corner'

function App() {
  return (
    <div className="App">
      <GithubCorner href='https://github.com/IanB64'
        target="_blank" rel="noopener noreferrer"
      />
      <div className="personal-logo">
        <img src="./logos/untitled-black.svg" alt='logo'/>
      </div>
      <div className='msg'>
        <h3>
          hi there, it's ianbaiyilun <br />
          i don't have much to show now <br />
          later...
        </h3>        
      </div>
    </div>
  );
}

export default App;
