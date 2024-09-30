"use client";
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query getPokemons($limit: Int!, $offset: Int!, $type: String) {
    pokemons(limit: $limit, offset: $offset, type: $type) {
      name
    }
  }
`;

const query = gql`query {
  pokemons {
    name
  }
}
`;

export default function Home() {
  console.log('query', query);
  console.log('GET_POKEMONS', GET_POKEMONS);
  ///const { data } = useQuery(query);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { limit, offset, type: selectedTypes.length > 0 ? selectedTypes[0] : null },
  });
  console.log('data', data);

  return (
    <h1>asd</h1>
  );
}
