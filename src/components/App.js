import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharactersPage from "./CharactersPage";
import CharacterDetailsPage from "./CharacterDetailsPage";
import ErrorPage from "./ErrorPage";
import "./ErrorPage.css";
import star from "../img/star.png";
import ship1 from "../img/ship1.png";
import ship2 from "../img/ship2.png";
import ship3 from "../img/ship3.png";

const API_END_POINT = "https://swapi.dev/api/people/";

class App extends Component {
  state = {
    data: null,
    errorMessage: false,
    selectedButton: 1,
    numberOfPages: 0,
  };

  selectedButton = (selectedButton) => {
    this.setState({
      selectedButton,
    });
  };

  handleButtonsForCharactersListChange = (pageId) => {
    this.fetchData(API_END_POINT + `?page=${pageId}`).then((data) => {
      this.setState({
        data,
      });
    });
    this.selectedButton(pageId);
  };

  showError = (error) => {
    let errorMessage;

    switch (error.toString()) {
      case "Error: 404":
        errorMessage = "Error 404: File not found";
        break;
      case "Error: 403":
        errorMessage = "Error 403: Forbidden";
        break;
      case "Error: 500":
        errorMessage = "Error 500: Internal Server Error";
        break;
      case "Error: 503":
        errorMessage = "Error 503: Service Unavailable";
        break;
      case "Error: 504":
        errorMessage = "Error 504: Gateway Timeout";
        break;
      default:
        errorMessage = "Something went wrong";
        break;
    }

    this.setState({
      errorMessage,
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
      console.log(data);
      if (data !== undefined) {
        this.setState({
          data,
          numberOfPages: Math.ceil(data.count / data.results.length),
        });
      }
    });
  }

  render() {
    const { errorMessage, numberOfPages, data, selectedButton } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              component={() =>
                errorMessage ? (
                  <div className="errorMassage">
                    <h2>{errorMessage}</h2>
                  </div>
                ) : (
                  <CharactersPage
                    numberOfPages={numberOfPages}
                    data={data}
                    click={this.handleButtonsForCharactersListChange}
                    selectedButton={selectedButton}
                  />
                )
              }
            />
            <Route
              path="/character-details"
              render={(props) => (
                <CharacterDetailsPage {...props} fechData={this.fetchData} />
              )}
            />
            <Route component={ErrorPage} />
          </Switch>
          <img src={star} alt="star" className="star1" />
          <img src={star} alt="star" className="star2" />
          <img src={star} alt="star" className="star3" />
          <img src={star} alt="star" className="star4" />
          <img src={star} alt="star" className="star5" />
          <img src={star} alt="star" className="star6" />
          <img src={star} alt="star" className="star7" />
          <img src={ship1} alt="star wars ship 1" className="ship1" id="dd" />
          <img src={ship2} alt="star wars ship 2" className="ship2" />
          <img src={ship3} alt="star wars ship 3" className="ship3" />
        </div>
      </Router>
    );
  }
}

export default App;
