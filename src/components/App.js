import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharactersPage from "./CharactersPage";
import CharacterDetailsPage from "./CharacterDetailsPage";

const API_END_POINT = "https://swapi.dev/api/people/";

class App extends Component {
  state = {
    data: null,
    firstDataForBuildPagination: null,
    error: null,
  };

  handleButtonsForPageChange = (pageId) => {
    this.fetchData(API_END_POINT + `?page=${pageId}`).then((data) => {
      this.setState({
        data,
      });
    });
  };

  showError = (error) => {
    console.log(error);
  };

  fetchData = (API) => {
    return fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .catch((error) => this.showError(error));
  };

  componentDidMount() {
    this.fetchData(API_END_POINT).then((data) => {
      // const numberOfPages = Math.ceil(data.count / data.results.length);
      this.setState({
        data,
        firstDataForBuildPagination: data,
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            component={() => (
              <CharactersPage
                firstData={this.state.firstDataForBuildPagination}
                data={this.state.data}
                click={this.handleButtonsForPageChange}
              />
            )}
          />
          <Route
            path="/character-details"
            render={(props) => (
              <CharacterDetailsPage {...props} fechData={this.fetchData} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
