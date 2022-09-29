import React from "react";
import Home from "./pages/Home";
import { useQuery, gql } from "@apollo/client";
import { GlobalStyle } from "./styles";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

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
