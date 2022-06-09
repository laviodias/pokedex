import React, { createContext, useCallback, useEffect, useState } from "react";
import { getPokemonDetails, getPokemons, getPokemonsByType } from "../api/api";

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
    }
    types.forEach(async (type) => {
      const result = await getPokemonsByType(type);
      const pokemonsByType = result.map((pokemon) => pokemon?.pokemon?.name);
      if (partial?.length === 0) {
        partial = pokemonsByType;
      } else {
        partial = pokemonsByType.filter((pokemon) => partial.includes(pokemon));
      }
      setPokemons(partial);
    });
  }, [types]);

  const getByName = useCallback(async () => {
    const result = await getPokemonDetails(query);
    if (result.name) {
      const pokemonsByName = [result.name];
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
    setPokemons(response.results.map((pokemon) => pokemon?.name));
    setTotalPages(Math.ceil(response.count / 12) - 1);
  };

  useEffect(() => {
    getPokemonsFromApi(page * 12);
  }, [page]);

  useEffect(() => {
    getPokemonsFromApi();
  }, []);

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
