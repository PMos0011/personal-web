import React from "react";
import "./App.css";

import Header from './components/header/header';
import Content from './components/content/content';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
