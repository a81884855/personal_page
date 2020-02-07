import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import logo from "./logo.png";
import "./index.css";
// import "./bootstrap.min.css";

const client = new ApolloClient({
  uri: "https://kvbshnusjk.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="space-x">
            <div className="container" style={{ paddingBottom: 300 }}>
              <img
                src={logo}
                alt="SpaceX"
                style={{
                  width: 300,
                  display: "block",
                  margin: "auto"
                }}
              />
              <Route exact path="/space-x" component={Launches} />
              <Route
                exact
                path="/space-x/launch/:flight_number"
                component={Launch}
              />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
