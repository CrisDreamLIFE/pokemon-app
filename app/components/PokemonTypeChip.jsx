import {Chip} from "@nextui-org/react";

const typeColors = {
  grass: "bg-green-500 text-white",
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  bug: "bg-lime-500 text-white",
  normal: "bg-gray-500 text-white",
  electric: "bg-yellow-500 text-black",
  ground: "bg-yellow-700 text-white",
  rock: "bg-stone-700 text-white",
  psychic: "bg-pink-500 text-white",
  ice: "bg-blue-200 text-black",
  dragon: "bg-purple-700 text-white",
  dark: "bg-black text-white",
  fairy: "bg-pink-300 text-black",
  fighting: "bg-red-700 text-white",
  poison: "bg-purple-500 text-white",
  ghost: "bg-indigo-700 text-white",
  flying: "bg-blue-300 text-black",
  steel: "bg-gray-300 text-black",
};

export function PokemonTypeChip ({ types }) {

  return (
    <div class="flex flex-wrap gap-x-2">
    {types.map((type, index) => (
      <Chip
        key={index}
        size="sm"
        className={typeColors[type.toLowerCase()] || "bg-gray-500 text-white"}
      >
        {type}
      </Chip>
    ))}
  </div>
  );
}