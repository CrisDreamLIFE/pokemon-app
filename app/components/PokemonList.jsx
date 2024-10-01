"use client";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { PokemonCard } from "./PokemonCard";
import { Pagination } from "@nextui-org/react";

const GET_POKEMONS = gql`
  query getPokemons($limit: Int!, $offset: Int!, $types: [String!], $search: String) {
    pokemonList(limit: $limit, offset: $offset, types: $types, search: $search) {
      list {
        name
        id
        types
        imageUrl
      }
      total
    }
  }
`;

export default function PokemonList({ limit, offset, types, search, currentPage, onPageChange }) {
  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { limit, offset, types: types.length ? types : null, search: search || null },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon</p>;

  const totalPokemons = data.pokemonList.total;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data.pokemonList.list.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <Pagination
          showControls
          total={Math.ceil(totalPokemons / limit)}
          initialPage={currentPage}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
}
