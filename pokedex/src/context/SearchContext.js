import React, { createContext, useCallback, useEffect, useState } from "react";
import { getAllPokemons, getPokemons, getPokemonsByType } from "../api/api";

const initialValues = {
  types: [],
  query: "",
  pokemons: [],
  page: 1,
  totalPages: 1,
};

const SearchContext = createContext(initialValues);

const SearchProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let partial = [];
    if (types.length === 0) {
      getPokemonsFromApi();
    } else {
      types.forEach(async (type) => {
        const result = await getPokemonsByType(type);
        if (partial?.length === 0) {
          partial = result;
        } else {
          partial = result.filter((pokemon) => partial.includes(pokemon));
        }
        setPokemons(partial);
      });
    }
  }, [types]);

  const getByName = useCallback(async () => {
    if (query !== "") {
      const response = await getAllPokemons();
      const pokemonsByName = response.results.filter((pokemon) =>
        pokemon.name.match(query)
      );
      setPokemons(pokemonsByName);
    } else {
      getPokemonsFromApi();
    }
  }, [query]);

  useEffect(() => {
    getByName();
  }, [query]);

  const getPokemonsFromApi = async (offset = 0) => {
    const response = await getPokemons(offset);
    setPokemons(response.results);
    setTotalPages(Math.ceil(response.count / 12) - 1);
  };

  useEffect(() => {
    getPokemonsFromApi((page - 1) * 12);
  }, [page]);

  const resetAll = () => {
    setTypes([]);
    setQuery("");
    setPokemons([]);
    setPage(1);
  };

  return (
    <SearchContext.Provider
      value={{
        types,
        query,
        setTypes,
        setQuery,
        pokemons,
        page,
        setPage,
        totalPages,
        resetAll,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
