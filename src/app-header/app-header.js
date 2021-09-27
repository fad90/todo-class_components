import React from "react";
import ReactDOM from "react-dom";
import "./app-header.css"

class AppHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__text">Todo List</div>
        <div className="header__count">4 more todo, 0 done</div>
      </header>
    );
  }
}

export default AppHeader;
