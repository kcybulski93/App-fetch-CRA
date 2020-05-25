import React, { Component } from "react";
import "./BuildPagination.css";

class BuildPagination extends Component {
  state = {
    selectedButton: null,
  };

  buttonSelected = (selectedButton) => (e) => {
    this.setState({
      selectedButton,
    });
    this.props.click(selectedButton);
  };

  render() {
    const pageButton = [];
    for (let i = 1; i <= this.props.numberOfPages; i++) {
      pageButton.push(
        <button
          key={i}
          className={i === this.state.selectedButton ? "selected" : ""}
          type="button"
          onClick={this.buttonSelected(i)}
        >
          {i}
        </button>
      );
    }

    return <div className="buttonsWrapper">{pageButton}</div>;
  }
}

export default BuildPagination;
