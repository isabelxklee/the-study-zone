import React from "react";
import Home from "./pages/Home";
import { useQuery } from "@apollo/client";
import { GlobalStyle } from "./styles";
import { GetEverything } from "./queries";
import Loading from "./components/Loading";

const App = () => {
  const { loading, error, data } = useQuery(GetEverything);

  console.log(error ? `Error: ${error}` : "Nothing to see here!");

  return (
    <>
      <GlobalStyle />

      {loading ? (
        <Loading />
      ) : (
        <Home
          algos={data.algorithms}
          categories={data.categories}
          difficulties={data.difficulties}
        />
      )}
    </>
  );
};

export default App;
