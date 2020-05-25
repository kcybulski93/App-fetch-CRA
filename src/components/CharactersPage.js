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
        <div className="imgWrapper">
          <img src={img} alt="Star Wars Logo" />
        </div>
      </header>
      <main>
        <h1 className="textCharacters">Characters</h1>
        <section>
          <div className="charactersListWrapper">
            {data ? <CharacterList data={data} /> : data}
          </div>
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
