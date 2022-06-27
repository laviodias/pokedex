import React, { createContext, useCallback, useEffect, useState } from "react";
import { getAllPokemons, getPokemons, getPokemonsByType } from "../api/api";

const initialValues = {
  types: [],
  query: "",
  pokemons: [],
  page: 1,
  totalPages: 1,
};

const POKEMONS_PER_PAGE = 12;

const SearchContext = createContext(initialValues);

const SearchProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsQuery, setPokemonsQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let partial = [];
    if (types.length === 0) {
      getPokemonsFromApi();
    } else {
      types.forEach(async (type) => {
        const result = await getPokemonsByType(type);
        const pokemons = result.map((pokemon) => pokemon.pokemon);
        if (partial?.length === 0) {
          partial = pokemons;
        } else {
          partial = pokemons.filter((pokemon) => {
            return partial.find((p) => p.name === pokemon.name);
          });
        }
        setPokemonsQuery(
          partial.splice((page - 1) * POKEMONS_PER_PAGE, POKEMONS_PER_PAGE)
        );
        setPokemons(partial);
        setTotalPages(Math.ceil(pokemons.length / POKEMONS_PER_PAGE));
      });
    }
  }, [types]);

  const getByName = useCallback(async () => {
    if (query !== "") {
      const response = await getAllPokemons();
      const pokemonsByName = response.results.filter((pokemon) =>
        pokemon.name.match(query)
      );
      setNotFound(pokemonsByName.length === 0);
      setTotalPages(Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE));
      setPokemonsQuery(
        pokemonsByName.splice((page - 1) * POKEMONS_PER_PAGE, POKEMONS_PER_PAGE)
      );
    } else {
      getPokemonsFromApi();
    }
  }, [query, page]);

  useEffect(() => {
    getByName();
    setNotFound(false);
  }, [query]);

  const getPokemonsFromApi = async (offset = 0) => {
    setPokemonsQuery();
    const response = await getPokemons(offset);
    setPokemons(response.results);
    setTotalPages(Math.ceil(response.count / POKEMONS_PER_PAGE) - 1);
  };

  useEffect(() => {
    if (query !== "") {
      getByName();
    } else if (types.length > 0) {
      setPokemonsQuery(
        pokemons.splice((page - 1) * POKEMONS_PER_PAGE, POKEMONS_PER_PAGE)
      );
    } else {
      getPokemonsFromApi((page - 1) * POKEMONS_PER_PAGE);
    }
  }, [page]);

  const resetAll = () => {
    setTypes([]);
    setQuery("");
    setPokemons([]);
    setPage(1);
    setNotFound(false);
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
        pokemonsQuery,
        notFound,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
