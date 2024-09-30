"use client"
import { useParams } from 'next/navigation';
import { useQuery, gql } from '@apollo/client';
import { Image } from '@nextui-org/react';

const GET_POKEMON = gql`
  query getPokemon($id: Int!) {
    pokemon(id: $id) {
      id
      name
      types
      imageUrl
    }
  }
`;

export default function ShowPage() {
  const { id } = useParams();
  console.log("el id", id)
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { id: parseInt(id) },
    skip: !id, // Solo ejecuta la consulta si id está definido
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("dataaaa", data)
  const { pokemon } = data;

  return (
    <div>
      <p h1>{pokemon.name}</p>
      <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={pokemon.imageUrl}
          width={300}
        />
      <p h3>Types:</p>
      <p>{pokemon.types.join(', ')}</p>
    </div>
  );
};

