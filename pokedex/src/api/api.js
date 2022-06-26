import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemons = async (offset = 0) => {
  const response = await axios.get(
    `${BASE_URL}pokemon?limit=12&offset=${offset}`
  );
  return response.data;
};

export const getAllPokemons = async () => {
  const response = await axios.get(`${BASE_URL}pokemon?limit=10000`);
  return response.data;
};

export const fetchPokemon = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getPokemonsByType = async (type) => {
  const response = await axios.get(`${BASE_URL}type/${type}`);
  return response.data.pokemon;
};

export const getPokemonDescriptions = async (id) => {
  const response = await axios.get(`${BASE_URL}characteristic/${id}`);
  const enDescription = response.data.descriptions.find(
    (description) => description.language.name === "en"
  );
  return enDescription.description;
};
