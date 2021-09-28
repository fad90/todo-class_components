import React from "react";
import ReactDOM from "react-dom";
import "./app-header.css"

class AppHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__text">Todo List</h1>
        <h2 className="header__count">4 more todo, 0 done</h2>
      </div>
    );
  }
}

export default AppHeader;
