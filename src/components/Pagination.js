import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const { numberOfPages, selectedButton, click } = props;
  const pageButton = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageButton.push(
      <button
        key={i}
        className={i === selectedButton ? "selected" : ""}
        type="button"
        onClick={click.bind(this, i)}
      >
        {i}
      </button>
    );
  }

  return <div className="buttonsWrapper">{pageButton}</div>;
};

export default Pagination;
