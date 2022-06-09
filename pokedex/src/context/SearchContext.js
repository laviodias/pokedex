import React, { createContext, useCallback, useEffect, useState } from "react";
import { getPokemonDetails, getPokemons, getPokemonsByType } from "../api/api";

const initialValues = {
  types: [],
  query: "",
  pokemons: [],
};

const SearchContext = createContext(initialValues);

const SearchProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let partial = [];
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
    console.log("asdasd", query);
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

  const getPokemonsFromApi = async () => {
    const response = await getPokemons();
    setPokemons(response.results.map((pokemon) => pokemon?.name));
  };

  useEffect(() => {
    getPokemonsFromApi();
  }, []);

  return (
    <SearchContext.Provider
      value={{ types, query, setTypes, setQuery, pokemons }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
