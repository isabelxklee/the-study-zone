import { gql } from "@apollo/client";

export const GetEverything = gql`
  query GetEverything {
    algorithms {
      id
      name
      description
      solution
      category {
        id
        name
      }
      difficulty {
        id
        name
      }
    }
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

export const Algorithms = gql`
  query GetAlgorithms {
    algorithms {
      id
      name
      description
      category {
        id
        name
      }
      difficulty {
        id
        name
      }
    }
  }
`;
