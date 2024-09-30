import { gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const GET_POKEMONS = gql`
  query getPokemons($limit: Int!, $offset: Int!, $type: String) {
    pokemons(limit: $limit, offset: $offset, type: $type) {
      id
      name
      image
      types
    }
  }
`;