import React, { useEffect } from "react";
import { fetchPokemon } from "../../api/api";
import * as S from "./styles";
import { formatName } from "../../assets/js/utils";

export default function Card({ name, url }) {
  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPokemon(url).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, [url]);

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
      <img
        src={
          pokemon?.sprites.other.dream_world.front_default ??
          pokemon?.sprites.other["official-artwork"].front_default
        }
        alt={name}
        height={120}
        width={120}
      />
    </S.Card>
  );
}
