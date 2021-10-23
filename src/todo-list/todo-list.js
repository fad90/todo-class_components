import React from "react";
import "./todo-list.css";
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({ todos, onDeleted, onToogleDone, onToogleImportant }) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key={id}>
        <TodoListItem {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToogleDone={() => onToogleDone(id)}
        onToogleImportant={() => onToogleImportant(id)}/>
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
