import React, { Component } from "react";
import img from "../img/logo.png";
import BuildCharacterList from "./BuildCharactersList";
import BuildPagination from "./BuildPagination";

class CharactersPage extends Component {
  state = {};

  render() {
    return (
      <div className="charactersPageWrapper">
        <header>
          <img src={img} alt="Star Wars Logo" />
        </header>
        <main>
          <h1>Characters</h1>
          <section className="charactersListWrapper">
            {this.props.data ? (
              <BuildCharacterList data={this.props.data} />
            ) : (
              this.props.data
            )}
          </section>
          <footer className="paginationWrapper">
            {this.props.numberOfPages ? (
              <BuildPagination
                numberOfPages={this.props.numberOfPages}
                click={this.props.click}
              />
            ) : (
              this.props.data
            )}
          </footer>
        </main>
      </div>
    );
  }
}

export default CharactersPage;
