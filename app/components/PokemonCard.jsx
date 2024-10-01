'use client'
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import { PokemonTypeChip } from "./PokemonTypeChip";
import { useRouter } from 'next/navigation'

export function PokemonCard ({ pokemon }) {
  const router = useRouter()
  return (
    <Card isPressable onPress={() => router.push(`/pokemons/${pokemon.id}`)}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <small className="text-default-700">{`N° ${pokemon.id}`}</small>
        <h2 className="text-xl font-bold">{pokemon.name}</h2>
      </CardHeader>
      <CardBody className="overflow-visible py-0 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={pokemon.imageUrl}
          width={200}
        />
      </CardBody>
      <CardFooter className="flex-col items-center">
        <PokemonTypeChip types={pokemon.types}/>
      </CardFooter>
    </Card>
  );
};
