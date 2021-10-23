import React, { Component } from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Cofee"),
      this.createTodoItem("Build App"),
      this.createTodoItem("Learn Korean Language"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  itemDelete = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  itemAdd = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };

      return [
        ...arr.slice(0, idx), 
        newItem,
        ...arr.slice(idx + 1)
      ];
  }

  onToogleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  onToogleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  render() {
    const { todoData } = this.state
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="search-panel">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.itemDelete}
          onToogleDone={this.onToogleDone}
          onToogleImportant={this.onToogleImportant}
        />
        <ItemAddForm itemAdd={this.itemAdd} />
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
