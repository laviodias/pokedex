import React, { useEffect } from "react";
import { fetchPokemon } from "../../api/api";
import * as S from "./styles";
import { formatName } from "../../assets/js/utils";
import Modal from "./modal";

const IMAGE_SIZE = 120;

export default function Card({ name, url }) {
  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    if (url) {
      fetchPokemon(url).then((data) => {
        setPokemon(data);
        setLoading(false);
      });
    }
  }, [url]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <S.Card
        type={pokemon?.types[0]?.type?.name}
        /* onClick={() => setModalOpen(true)} */
        data-testid={name + " card"}
      >
        <div>
          <S.Name>{formatName(name)}</S.Name>

          <S.TypesContainer>
            {pokemon?.types.map((type) => (
              <S.Type
                key={type.type.name}
                type={type.type.name}
                data-testid={type.type.name + " type"}
              >
                {type.type.name.toUpperCase()}
              </S.Type>
            ))}
          </S.TypesContainer>
        </div>
        <img
          src={
            pokemon?.sprites.other.dream_world.front_default ??
            pokemon?.sprites.other["official-artwork"].front_default ??
            "https://icon-library.com/images/image-unavailable-icon/image-unavailable-icon-25.jpg"
          }
          alt={name + " image"}
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
        />
      </S.Card>
      {modalOpen ? (
        <Modal onClose={() => setModalOpen(false)} pokemon={pokemon} />
      ) : null}
    </>
  );
}
