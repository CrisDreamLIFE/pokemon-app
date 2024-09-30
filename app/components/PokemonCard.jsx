'use client'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

import { useRouter } from 'next/navigation'

export function PokemonCard ({ pokemon }) {
  const router = useRouter()
  console.log('pokemonnnn', pokemon)
  return (
    <Card className="py-4" isPressable onPress={() => router.push(`/pokemons/${pokemon.id}`)}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold">{pokemon.name}</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={pokemon.imageUrl}
          width={200}
        />
      </CardBody>
    </Card>
  );
};
