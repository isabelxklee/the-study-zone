import { gql } from "@apollo/client";

export const CategoriesAndDifficulties = gql`
  query GetCategories {
    categories {
      id
      name
    }
    difficulties {
      id
      name
    }
  }
`;
