import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import App from "./App";
import Error from "./pages/Error";
import ShowAlgorithm from "./pages/ShowAlgorithm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/algorithms/:algorithmId",
    element: <ShowAlgorithm />,
  },
]);

const client = new ApolloClient({
  uri: "https://study-zone-backend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetCategories {
        categories {
          id
          name
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
