import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  }

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    })
  }

  render() {
    const { label } = this.props;
    const { done } = this.state;
    const { important } = this.state;

    let classNames = 'todo__text'
    if(done) {
      classNames += ' done'
    }

    if(important) {
      classNames += ' important-mark'
    }

    return (
      <span className="todo">
        <span className={classNames} 
        onClick={this.onLabelClick}>
          {label}
        </span>
        <div className="todo__button-group">
          <button className="todo__button todo__button-trash">
            <i class="far fa-trash-alt"></i>
          </button>
          <button className="todo__button todo__button-exclamation"
          onClick={this.onMarkImportant}>
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
