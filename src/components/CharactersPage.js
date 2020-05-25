import React from "react";
import img from "../img/logo.png";
import CharacterList from "./CharactersList";
import Pagination from "./Pagination";
import "./CharactersPage.css";

const CharactersPage = (props) => {
  const { data, numberOfPages, click, selectedButton } = props;
  return (
    <div className="charactersPageWrapper">
      <header>
        <img src={img} alt="Star Wars Logo" />
      </header>
      <main>
        <h1>Characters</h1>
        <section className="charactersListWrapper">
          {data ? <CharacterList data={data} /> : data}
        </section>
        <footer className="paginationWrapper">
          {data ? (
            <Pagination
              numberOfPages={numberOfPages}
              click={click}
              selectedButton={selectedButton}
            />
          ) : (
            data
          )}
        </footer>
      </main>
    </div>
  );
};

export default CharactersPage;
