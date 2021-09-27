import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AppHeader from "../app-header/app-header";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <AppHeader />
      </div>
    );
  }
}

export default App;
