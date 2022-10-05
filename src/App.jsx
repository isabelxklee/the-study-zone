import React from "react";
import Home from "./pages/Home";
import { useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Algorithms } from "./queries";
import ShowAlgorithm from "./pages/ShowAlgorithm";
import Header from "./components/Header";

const App = () => {
  const { loading, error, data } = useQuery(Algorithms);

  console.log(error ? `Error: ${error}` : "Nothing to see here!");

  const createSlugs = (str) => {
    str = str.replace(/\s+/g, "-").toLowerCase();
    return str;
  };

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Header>
          <Route exact path="/">
            <Home />
          </Route>
          {!loading &&
            data.algorithms.map((algo) => (
              <Route
                exact
                path={`/algorithms/${createSlugs(algo.name)}`}
                key={algo.id}
              >
                <ShowAlgorithm key={algo.id} algo={algo} />
              </Route>
            ))}
        </Header>
      </Switch>
    </>
  );
};

export default App;
