import React from "react";
import "./BuildCharactersList.css";
import { Link } from "react-router-dom";

const BuildCharactersList = (props) => {
  const characters = props.data.results;
  const charactersList = characters.map((character) => {
    const splitURL = character.url.split("/");
    const characterId = splitURL[splitURL.length - 2];
    return (
      <li key={characterId} className="character">
        <Link
          to={{
            pathname: "/character-details",
            state: {
              characterId,
            },
          }}
        >
          {character.name}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul>{charactersList}</ul>
    </nav>
  );
};

export default BuildCharactersList;
