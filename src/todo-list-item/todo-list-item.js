import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false
  }

  onLabelClick = () => {
    this.setState({
      done: true
    })
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    const style = {
      color: important ? "green" : "red",
    };

    let classNames = 'todo__text'
    if(done) {
      classNames += ' done'
    }

    return (
      <span className="todo">
        <span style={style} 
        className={classNames} 
        onClick={this.onLabelClick}>
          {label}
        </span>
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
}

// const TodoListItem = ({label, important=false}) => {
//   const style = {
//     color: important ? "green" : "red"
//   }

//   return (
//     <span className="todo">
//       <span style={style} className="todo__text">{label}</span>
//       <div className="todo__button-group">
//         <button className="todo__button todo__button-trash">
//           <i class="far fa-trash-alt"></i>
//         </button>
//         <button className="todo__button todo__button-exclamation">
//           <i class="fas fa-exclamation"></i>
//         </button>
//       </div>
//     </span>
//   );
// }

// export default TodoListItem;
