import React, { useContext } from "react";
import Card from "../Card";
import Logo from "../../assets/images/Logo.svg";
import Search from "../Search";
import { CardsContainer, MainContainer } from "./styles";
import SearchContext from "../../context/SearchContext";
import PageList from "../PageList";

export default function Homepage() {
  const { pokemons, resetAll, pokemonsQuery, notFound } =
    useContext(SearchContext);

  return (
    <MainContainer>
      <img
        src={Logo}
        alt="Logo"
        width={50}
        onClick={resetAll}
        style={{ cursor: "pointer" }}
      />
      <Search />
      <h1>Pokedex</h1>
      <CardsContainer>
        {notFound ? (
          <h1>Pokemon not found</h1>
        ) : pokemonsQuery?.length ? (
          pokemonsQuery.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon?.url} />
          ))
        ) : (
          pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              url={
                pokemon?.url ||
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
              }
            />
          ))
        )}
      </CardsContainer>
      {!notFound ? <PageList /> : null}
    </MainContainer>
  );
}
