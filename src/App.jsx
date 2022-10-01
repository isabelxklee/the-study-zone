import React from "react";
import Home from "./pages/Home";
import { useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { GetEverything } from "./queries";
import Loading from "./components/Loading";
import ShowAlgorithm from "./pages/ShowAlgorithm";

const App = () => {
  const { loading, error, data } = useQuery(GetEverything);

  console.log(error ? `Error: ${error}` : "Nothing to see here!");

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          {loading ? (
            <Loading />
          ) : (
            <Home
              algos={data.algorithms}
              categories={data.categories}
              difficulties={data.difficulties}
            />
          )}
        </Route>
        {data &&
          data.algorithms.map((algo) => (
            <Route exact path={`/algorithms/${algo.id}`} key={algo.id}>
              <ShowAlgorithm key={algo.id} algo={algo} />
            </Route>
          ))}
      </Switch>
    </>
  );
};

export default App;
