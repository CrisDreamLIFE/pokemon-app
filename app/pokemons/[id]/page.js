"use client"
import { useParams } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import { Image } from '@nextui-org/react';
import { PokemonShowCard } from '@/app/components/PokemonShowCard';

const GET_POKEMON = gql`
  query getPokemon($id: Int!) {
    pokemon(id: $id) {
      id
      name
      types
      height
      weight
      imageUrl
      baseExperience
    }
  }
`;

export default function ShowPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { id: parseInt(id) },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("dataaaa", data)
  const { pokemon } = data;

  return (
    <div>
      <PokemonShowCard pokemon={pokemon}/>
    </div>
  );
};

