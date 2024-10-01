"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { TypeSidebar } from "../components/TypeSidebar";
import { PokemonCard } from "../components/PokemonCard";
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

const GET_TYPES = gql`
  query getPokemonTypes {
    pokemonTypes
  }
`;

export default function Home() {
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  const { data: typesData, loading: typesLoading, error: typesError } = useQuery(GET_TYPES);

  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { 
      limit, 
      offset, 
      types: selectedTypes.length ? selectedTypes : null,
      search: debouncedSearch || null // Usar el término de búsqueda debounced
    },
  });

  console.log("pokemons: ", data);

  // Manejar el debounce para el término de búsqueda
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 800); // Esperar 300ms antes de actualizar el término de búsqueda

    return () => {
      clearTimeout(handler); // Limpiar el temporizador al cambiar el término de búsqueda
    };
  }, [searchTerm]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setOffset(0);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setOffset(0);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Actualizar la página actual
    setOffset((page - 1) * limit); // Calcular el nuevo offset
  };

  if (typesLoading || loading) return <p>Loading...</p>;
  if (typesError) return <p>Error loading Pokémon types</p>;
  if (error) return <p>Error loading Pokémon</p>;

  return (
    <div className="p-5">
      {/* Layout principal usando flexbox */}
      <div className="flex gap-5">
        {/* Barra lateral de filtros */}
        <div className="w-1/4">
          <TypeSidebar
            types={typesData.pokemonTypes} // Se pasa la lista dinámica de tipos
            selectedTypes={selectedTypes}
            onTypeChange={handleTypeChange}
          />
        </div>

        {/* Listado de Pokémon */}
        <div className="w-3/4">
          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="mb-4 p-2 border rounded"
          />

          <div className="grid grid-cols-3 gap-4">
            {data.pokemonList.list.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-5 flex justify-center">
            <Pagination
              showControls
              total={Math.ceil(data.pokemonList.total / limit)}
              initialPage={currentPage} // Usar la página actual
              onChange={handlePageChange} // Controlar el cambio de página
            />
          </div>
        </div>
      </div>
    </div>
  );
}
