import React from "react";
import "./todo-list.css";
import TodoListItem from "../todo-list-item/todo-list-item";

class TodoList extends React.Component {
  render() {
    return (
      <li className="todo-list">
        <TodoListItem />
      </li>
    );
  }
}

export default TodoList;
