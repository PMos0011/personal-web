import React from "react";
import "./App.css";

import Header from './components/header/header';
import Content from './components/content/content';

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <Header/>
        <Content/>
      </header>
    </div>
  );
}

export default App;
