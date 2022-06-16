import React, { useContext } from "react";
import Card from "../Card";
import Logo from "../../assets/images/Logo.svg";
import Search from "../Search";
import { CardsContainer, MainContainer } from "./styles";
import SearchContext from "../../context/SearchContext";
import PageList from "../PageList";

export default function Homepage() {
  const { pokemons, resetAll } = useContext(SearchContext);

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
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </CardsContainer>
      <PageList />
    </MainContainer>
  );
}
