const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemons = async (offset = 0) => {
  const response = await fetch(`${BASE_URL}pokemon?limit=12&offset=${offset}`);
  const data = await response.json();
  return data;
};

export const getAllPokemons = async () => {
  const response = await fetch(`${BASE_URL}pokemon?limit=10000`);
  const data = await response.json();
  return data;
};

export const fetchPokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getPokemonsByType = async (type) => {
  const response = await fetch(`${BASE_URL}type/${type}`);
  const data = await response.json();
  return data.pokemon;
};

export const getPokemonDescriptions = async (id) => {
  const response = await fetch(`${BASE_URL}characteristic/${id}`);
  const data = await response.json();
  const enDescription = data.descriptions.find(
    (description) => description.language.name === "en"
  ).description;
  return enDescription;
};
