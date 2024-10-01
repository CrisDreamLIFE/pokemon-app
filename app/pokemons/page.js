"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { TypeSidebar } from "../components/TypeSidebar";
import { PokemonCard } from "../components/PokemonCard";
import { Pagination } from "@nextui-org/react";

const GET_POKEMONS = gql`
  query getPokemons($limit: Int!, $offset: Int!, $types: [String!], $search: String) {
    pokemons(limit: $limit, offset: $offset, types: $types, search: $search) {
      name
      id
      types
      imageUrl
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
    setOffset(0); // Reiniciar la paginación al cambiar de filtro
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setOffset(0); // Reiniciar la paginación al cambiar el término de búsqueda
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
            {data.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-5 flex justify-center">
            <Pagination
              total={Math.ceil(data.pokemons.length / limit)}
              initialPage={1}
              onChange={(page) => setOffset((page - 1) * limit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { gql } from "@apollo/client";
// import { TypeSidebar } from "../components/TypeSidebar";
// import { PokemonCard } from "../components/PokemonCard";
// import { Pagination } from "@nextui-org/react";

// const GET_POKEMONS = gql`
//   query getPokemons($limit: Int!, $offset: Int!, $types: [String!], $search: String) {
//     pokemons(limit: $limit, offset: $offset, types: $types, search: $search) {
//       name
//       id
//       types
//       imageUrl
//     }
//   }
// `;

// const GET_TYPES = gql`
//   query getPokemonTypes {
//     pokemonTypes
//   }
// `;

// export default function Home() {
//   const [limit, setLimit] = useState(9);
//   const [offset, setOffset] = useState(0);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const { data: typesData, loading: typesLoading, error: typesError } = useQuery(GET_TYPES);

//   const { data, loading, error } = useQuery(GET_POKEMONS, {
//     variables: { 
//       limit, 
//       offset, 
//       types: selectedTypes.length ? selectedTypes : null,
//       search: searchTerm || null // Enviamos el término de búsqueda
//     },
//   });

//   console.log("pokemons: ", data);

//   const handleTypeChange = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//     setOffset(0); // Reiniciar la paginación al cambiar de filtro
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setOffset(0); // Reiniciar la paginación al cambiar el término de búsqueda
//   };

//   if (typesLoading || loading) return <p>Loading...</p>;
//   if (typesError) return <p>Error loading Pokémon types</p>;
//   if (error) return <p>Error loading Pokémon</p>;

//   return (
//     <div className="p-5">
//       {/* Layout principal usando flexbox */}
//       <div className="flex gap-5">
//         {/* Barra lateral de filtros */}
//         <div className="w-1/4">
//           <TypeSidebar
//             types={typesData.pokemonTypes} // Se pasa la lista dinámica de tipos
//             selectedTypes={selectedTypes}
//             onTypeChange={handleTypeChange}
//           />
//         </div>

//         {/* Listado de Pokémon */}
//         <div className="w-3/4">
//           {/* Campo de búsqueda */}
//           <input
//             type="text"
//             placeholder="Buscar Pokémon..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="mb-4 p-2 border rounded"
//           />

//           <div className="grid grid-cols-3 gap-4">
//             {data.pokemons.map((pokemon) => (
//               <PokemonCard key={pokemon.id} pokemon={pokemon} />
//             ))}
//           </div>

//           {/* Paginación */}
//           <div className="mt-5 flex justify-center">
//             <Pagination
//               total={Math.ceil(data.pokemons.length / limit)}
//               initialPage={1}
//               onChange={(page) => setOffset((page - 1) * limit)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }