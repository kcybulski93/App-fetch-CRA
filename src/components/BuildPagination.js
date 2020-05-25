import React, { Component } from "react";
import "./BuildPagination.css";

class BuildPagination extends Component {
  state = {};

  render() {
    const numberOfPages = Math.ceil(
      this.props.firstData.count / this.props.firstData.results.length
    );
    const pageButton = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pageButton.push(
        <button
          key={i}
          className={i === this.props.selectedButton ? "selected" : ""}
          type="button"
          onClick={this.props.click.bind(this, i)}
        >
          {i}
        </button>
      );
    }

    return <div className="buttonsWrapper">{pageButton}</div>;
  }
}

export default BuildPagination;
