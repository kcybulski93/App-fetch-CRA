import React from "react";
import "./CharactersList.css";
import { Link } from "react-router-dom";

const BuildCharactersList = (props) => {
  const characters = props.data.results;
  const charactersList = characters.map((character) => {
    const splitURL = character.url.split("/");
    const characterId = splitURL[splitURL.length - 2];
    return (
      <div key={characterId} className="characterBlock">
        <Link
          className="characterName"
          to={{
            pathname: "/character-details",
            state: {
              characterId,
            },
          }}
        >
          <i className="icon-star-2" id="i"></i>
          {character.name}
        </Link>
      </div>
    );
  });

  return <nav>{charactersList}</nav>;
};

export default BuildCharactersList;
