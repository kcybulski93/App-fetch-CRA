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
    error: false,
    selectedButton: 1,
  };

  handleButtonsForPageChange = (pageId) => {
    this.fetchData(API_END_POINT + `?page=${pageId}`).then((data) => {
      this.setState({
        data,
      });
    });
    this.setState({
      selectedButton: pageId,
    });
  };

  showError = (error) => {
    let errorMessage;

    switch (error.toString()) {
      case "Error: 404":
        errorMessage = "Error: 404:File not found";
        break;
      case "Error: 403":
        errorMessage = "Forbidden";
        break;
      case "Error: 500":
        errorMessage = "Internal Server Error";
        break;
      case "Error: 503":
        errorMessage = "Service Unavailable";
        break;
      case "Error: 504":
        errorMessage = "Gateway Timeout";
        break;
      default:
        errorMessage = "Something went wrong";
        break;
    }

    this.setState({
      error: errorMessage,
    });
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
      this.setState({
        data,
        firstDataForBuildPagination: data,
      });
    });
  }

  render() {
    return this.state.error ? (
      <div className="App">
        <div className="error">{this.state.error}</div>
      </div>
    ) : (
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
                selectedButton={this.state.selectedButton}
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
