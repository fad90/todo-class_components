import React from "react";
import "./app-header.css"

class AppHeader extends React.Component {
  render() {
    const{ toDo, done } = this.props
    return (
      <div className="header">
        <h1 className="header__text">Todo List</h1>
        <h2 className="header__count">{ toDo } more toDo, { done } done</h2>
      </div>
    );
  }
}

export default AppHeader;
