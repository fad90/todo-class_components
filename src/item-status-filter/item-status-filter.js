import React from "react";
import ReactDOM from "react-dom";
import "./item-status-filter.css"

class ItemStatusFilter extends React.Component {
  render() {
    return (
      <div className="btn-group">
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Done</button>
      </div>
    );
  }
}

export default ItemStatusFilter;