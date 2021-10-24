import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  // buttons = [
  //   { name: "all", label: "All" },
  //   { name: "active", label: "Active" },
  //   { name: "done", label: "Done" },
  // ];

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn-outline-secondary"
        >
          All
        </button>
        <button
          type="button"
          className="btn-outline-secondary"
        >
          Active
        </button>
        <button
          type="button"
          className="btn-outline-secondary"
        >
          Done
        </button>
      </div>
    );
  }

  // {
  //   const { filter, onFilterChange } = this.props;

  //   const buttons = this.buttons.map(({ name, label }) => {
  //     const isActive = filter === name;
  //     const clazz = isActive ? "button-filter" : "btn-outline";
  //     return (
  //       <button type="button"
  //       className={`button-filter ${clazz}`}
  //       key={name}
  //       onClick={() => onFilterChange(name)}>
  //         {label}
  //       </button>
  //     );
  //   });
  //   return <div className="btn-group">{buttons}</div>;
  // }
}
