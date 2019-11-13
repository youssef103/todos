import React from 'react';
import logo from './logo.svg';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <img src={logo} className={style.AppLogos} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={style.AppLink}
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
