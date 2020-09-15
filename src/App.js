import React from "react";
import "./App.css";

import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
