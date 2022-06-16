import React, { useEffect } from "react";
import { getPokemonDescriptions } from "../../api/api";
import { ModalContainer, ModalBg } from "./styles";

export default function Modal({ pokemon, onClose }) {
  const [description, setDescription] = React.useState(null);

  useEffect(() => {
    if (pokemon?.id) {
      getPokemonDescriptions(pokemon.id).then((data) => {
        setDescription(data);
      });
    }
  }, [pokemon]);

  return (
    <ModalContainer onClick={onClose}>
      <ModalBg>
        {pokemon.name} {description}
      </ModalBg>
    </ModalContainer>
  );
}
