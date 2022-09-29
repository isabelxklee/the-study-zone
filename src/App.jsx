import React from "react";
import Home from "./pages/Home";
import { useQuery } from "@apollo/client";
import { GlobalStyle } from "./styles";
import * as Query from "./queries";

const App = () => {
  const { loading, error, data } = useQuery(Query.GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <GlobalStyle />
      <Home categories={data.categories} />
    </>
  );
};

export default App;
