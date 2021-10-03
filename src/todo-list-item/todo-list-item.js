import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({label}) => {
  return (
    <span className="todo">
      <span className="todo__text">{label}</span>
      <div className="todo__button-group">
        <button className="todo__button todo__button-trash">
          <i class="far fa-trash-alt"></i>
        </button>
        <button className="todo__button todo__button-exclamation">
          <i class="fas fa-exclamation"></i>
        </button>
      </div>
    </span>
  );
}

export default TodoListItem;
