const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemons = async (offset = 0) => {
  const response = await fetch(`${BASE_URL}pokemon?limit=12&offset=${offset}`);
  const data = await response.json();
  return data;
};

export const getPokemonDetails = async (name) => {
  const response = await fetch(`${BASE_URL}pokemon/${name}`);
  const data = await response.json();
  return data;
};

export const getPokemonsByType = async (type) => {
  const response = await fetch(`${BASE_URL}type/${type}`);
  const data = await response.json();
  return data.pokemon;
};
