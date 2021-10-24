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
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Build App"),
      this.createTodoItem("Learn English Language"),
    ],
    term: '',
    filter: 'all'
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
        todoData: newArr,
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToogleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onToogleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => { 
    this.setState({ filter });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="search-panel">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.itemDelete}
          onToogleDone={this.onToogleDone}
          onToogleImportant={this.onToogleImportant}
        />
        <ItemAddForm itemAdd={this.itemAdd} />
      </div>
    );
  }
}
