import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  render() {
    const {
      label,
      onDeleted,
      onToogleDone,
      onToogleImportant,
      important,
      done,
    } = this.props;

    let classNames = "todo__text";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important-mark";
    }

    return (
      <span className="todo">
        <span className={classNames} onClick={onToogleDone}>
          {label}
        </span>
        <div className="todo__button-group">
          <button
            className="todo__button todo__button-trash"
            onClick={onDeleted}
          >
            <i class="far fa-trash-alt"></i>
          </button>
          <button
            className="todo__button todo__button-exclamation"
            onClick={onToogleImportant}
          >
            <i class="fas fa-exclamation"></i>
          </button>
        </div>
      </span>
    );
  }
}
