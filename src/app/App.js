import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AppHeader from "../app-header/app-header";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
