import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

export const GET_DIFFICULTIES = gql`
  query GetDifficulties {
    difficulties {
      id
      name
    }
  }
`;

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
