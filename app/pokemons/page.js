"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { TypeSidebar } from "../components/TypeSidebar";
import PokemonList from "../components/PokemonList";

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

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 400);

    return () => {
      clearTimeout(handler);
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
    setCurrentPage(page);
    setOffset((page - 1) * limit);
  };

  if (typesLoading) return <p>Loading...</p>;
  if (typesError) return <p>Error loading Pokémon types</p>;

  return (
    <div className="p-5">
      <div className="flex gap-5">
        <div className="w-1/6">
          <TypeSidebar
            types={typesData.pokemonTypes}
            selectedTypes={selectedTypes}
            onTypeChange={handleTypeChange}
          />
        </div>

        <div className="w-4/6">
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="mb-4 p-2 border rounded"
          />

          <PokemonList
            limit={limit}
            offset={offset}
            types={selectedTypes}
            search={debouncedSearch}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
