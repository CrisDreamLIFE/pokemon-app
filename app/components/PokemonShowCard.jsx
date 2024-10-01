'use client'
import {Card, CardHeader, CardBody, Image, CardFooter, Button} from "@nextui-org/react";
import { PokemonTypeChip } from "./PokemonTypeChip";
import { useRouter } from 'next/navigation'

export function PokemonShowCard ({ pokemon }) {
  const router = useRouter()
  return (
    <div className="container mx-auto px-72 pt-10">
      <div className="mb-4">
        <Button onClick={() => router.back()} size="sm" color="secondary" variant="flat">
          Volver Atrás
        </Button>
      </div>
        
      <div className="columns-2">
      <div className="flex-col"></div>
        <div className="flex-col">
          <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={pokemon.imageUrl}
              width={400}
          />
        </div>
        <div className="flex-col">
          <h2 className="text-2xl font-bold pt-32 capitalize">{pokemon.name}</h2>
          <small className="text-default-700">{`N° ${pokemon.id}`}</small>
          <p><span className="font-bold">Height:</span> {pokemon.height/10 + " m"}</p>
          <p><span className="font-bold">Weight:</span> {pokemon.weight/10 + " kg"}</p>
          <div className="flex flex-row">
            <div className="flex-col">
              <span className="font-bold">Types:</span>
            </div>
            <div className="flex-col ml-4">
              <PokemonTypeChip types={pokemon.types}/>
            </div>
          </div>
        </div>
        <div className="flex-col"></div>
        
      </div>
    </div>
  );
};
