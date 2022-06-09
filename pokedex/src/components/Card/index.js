import React, { useEffect } from "react";
import { getPokemonDetails } from "../../api/api";
import * as S from "./styles";
import { formatName } from "../../assets/js/utils";

export default function Card({ name }) {
  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    getPokemonDetails(name).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <S.Card type={pokemon?.types[0]?.type?.name}>
      <div>
        <S.Name>{formatName(name)}</S.Name>

        <S.TypesContainer>
          {pokemon?.types.map((type) => (
            <S.Type key={type.type.name} type={type.type.name}>
              {type.type.name.toUpperCase()}
            </S.Type>
          ))}
        </S.TypesContainer>
      </div>
      <img src={pokemon?.sprites?.front_default} alt={name} width={120} />
    </S.Card>
  );
}
