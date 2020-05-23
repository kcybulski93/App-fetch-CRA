import React, { Component } from "react";

class BuildPagination extends Component {
  state = {};

  render() {
    const pageButton = [];
    for (let i = 1; i <= this.props.numberOfPages; i++) {
      pageButton.push(
        <button key={i} data-page-id={i} onClick={() => this.props.click(i)}>
          {i}
        </button>
      );
    }

    return <div>{pageButton}</div>;
  }
}

export default BuildPagination;
