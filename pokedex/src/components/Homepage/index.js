import React, { useContext } from "react";
import Card from "../Card";
import Logo from "../../assets/images/Logo.svg";
import Search from "../Search";
import { CardsContainer, MainContainer } from "./styles";
import SearchContext from "../../context/SearchContext";

export default function Homepage() {
  const { pokemons } = useContext(SearchContext);
  
  return (
    <MainContainer>
      <img src={Logo} alt="Logo" width={50} />
      <Search />
      <h1>Pokedex</h1>
      <CardsContainer>
        {pokemons.map((pokemon) => (
          <Card key={pokemon} name={pokemon} />
        ))}
      </CardsContainer>
    </MainContainer>
  );
}
