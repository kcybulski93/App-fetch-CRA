import React, { Component } from "react";
import "./CharacterDetailsPage.css";
import { Link } from "react-router-dom";

class CharacterDetailsPage extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const { characterId } = this.props.location.state;
    const url = `https://swapi.dev/api/people/${characterId}/`;
    this.props.fechData(url).then((data) => {
      this.setState({
        data,
      });
    });
  }

  render() {
    const {
      name,
      gender,
      height,
      mass,
      birth_year,
      hair_color,
      skin_color,
      eye_color,
    } = this.state.data;
    return (
      <>
        <div className="detailsWrapper">
          <div className="text">Name:</div>
          <div className="data">{name}</div>
          <div className="text">Gender:</div>
          <div className="data">{gender}</div>
          <div className="text">Height:</div>
          <div className="data">{height}</div>
          <div className="text">Mass:</div>
          <div className="data">{mass}</div>
          <div className="text">Birth year:</div>
          <div className="data">{birth_year}</div>
          <div className="text">Hair color:</div>
          <div className="data">{hair_color}</div>
          <div className="text">Skin color:</div>
          <div className="data">{skin_color}</div>
          <div className="text">Eye color:</div>
          <div className="data">{eye_color}</div>
        </div>
        <Link className="returnWrapper" to="/">
          <i className="fas fa-undo-alt" id="return"></i>
        </Link>
      </>
    );
  }
}

export default CharacterDetailsPage;
