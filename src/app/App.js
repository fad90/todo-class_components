import React from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";

const App = () => {
  const todoData = [
    {label: "Drink Cofee", important: true, id:1},
    {label: "Build App", important: false, id:2},
    {label: "Learn Korean Language", important: true, id:3}
  ]

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}/>
    </div>
  );
};

export default App;
