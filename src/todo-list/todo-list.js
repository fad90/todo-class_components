import React from "react";
import "./todo-list.css";
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem label={item.label}/>
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
