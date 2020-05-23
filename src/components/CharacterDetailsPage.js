import React, { Component } from "react";

class CharacterDetailsPage extends Component {
  componentDidMount() {
    const { characterId } = this.props.location.state;
    const url = `https://swapi.dev/api/people/${characterId}/`;
    this.props.fechData(url).then((data) => {
      console.log(data);
    });
  }
  render() {
    return "Dupa";
  }
}

export default CharacterDetailsPage;
