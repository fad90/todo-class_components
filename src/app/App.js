import React, { Component } from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";


export default class App extends Component {
  state = {
    todoData: [
      {label: "Drink Cofee", important: true, id:1},
      {label: "Build App", important: false, id:2},
      {label: "Learn Korean Language", important: true, id:3}
    ]
  }

  itemDelete = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx+1);
      const newArr = [...before, ...after];
      return {
        todoData: newArr
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={ this.state.todoData }
      onDeleted={ this.itemDelete }/>
      </div>
    );
  }
}

// const App = () => {
//   const todoData = [
//     {label: "Drink Cofee", important: true, id:1},
//     {label: "Build App", important: false, id:2},
//     {label: "Learn Korean Language", important: true, id:3}
//   ]

//   return (
//     <div className="app">
//       <AppHeader />
//       <div className="search-panel">
//         <SearchPanel />
//         <ItemStatusFilter />
//       </div>
//       <TodoList todos={todoData}
//     onDeleted={ (id) => console.log("del", id) }/>
//     </div>
//   );
// };

// export default App;
