import React from "react";
import Home from "./pages/Home";
import { useQuery } from "@apollo/client";
import { GlobalStyle } from "./styles";
import * as Query from "./queries";
import Loading from "./components/Loading";

const App = () => {
  const { loading, error, data } = useQuery(Query.CategoriesAndDifficulties);

  console.log(`Error: ${error}`);

  return (
    <>
      <GlobalStyle />

      {loading ? (
        <Loading />
      ) : (
        <Home categories={data.categories} difficulties={data.difficulties} />
      )}
    </>
  );
};

export default App;
