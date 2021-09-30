import React from "react";
import "./todo-list-item.css"

class TodoListItem extends React.Component {
  render() {
    return (
      <span className="todo">
        <span>Привет</span>
        <button>Корзина</button>
        <button>Важное</button>
      </span>
    );
  }
}

export default TodoListItem;
