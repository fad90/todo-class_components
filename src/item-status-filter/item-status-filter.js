import React, { Component } from 'react'
import "./item-status-filter.css"

export default class ItemStatusFilter extends Component {
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

