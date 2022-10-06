import React from "react";
import { useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Algorithms } from "./queries";
import ShowAlgorithm from "./pages/ShowAlgorithm";
import Home from "./pages/Home";
import About from "./pages/About";
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
          <Route exact path="/about">
            <About />
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
