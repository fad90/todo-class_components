import React from "react";
import "./search-panel.css";

class SearchPanel extends React.Component {
  render() {
    return <input type="text" className="search-input" placeholder="search" />;
  }
}

export default SearchPanel;
