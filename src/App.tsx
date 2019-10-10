import React from "react";
import "./App.css";
import { Rating } from "./Rating";
import { Reporting } from "./Reporting";
import { Administration } from "./Administration";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://smiley-feedback-db.herokuapp.com/v1/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="title">
              <h3 className="h3">Rating App</h3>
            </div>
            <nav>
              {/* <ul className="list">
                <li> */}
              <Link className="link" to="/rate">
                {/* Rate */}
              </Link>
              {/* </li>
                <li> */}
              <Link className="link" to="/reporting">
                {/* Reporting */}
              </Link>
              {/* </li>
                <li> */}
              <Link className="link" to="/admin">
                {/* Admin */}
              </Link>
              {/* </li>
              </ul> */}
            </nav>
          </header>

          <Switch>
            <Route path="/rate">
              <Rating />
            </Route>
            <Route path="/reporting">
              <Reporting />
            </Route>
            <Route path="/admin">
              <Administration />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
