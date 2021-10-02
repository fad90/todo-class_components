import React from "react";
import ReactDOM from "react-dom";
import "./item-status-filter.css"

class ItemStatusFilter extends React.Component {
  render() {
    return (
      <div className="btn-group">
          <button type="button" className="button-filter">All</button>
          <button type="button" className="button-filter">Active</button>
          <button type="button" className="button-filter">Done</button>
      </div>
    );
  }
}

export default ItemStatusFilter;