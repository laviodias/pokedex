import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import { TypeStyle } from "./styles";

export default function Type({ name }) {
  const { setTypes, types } = useContext(SearchContext);

  const handleClick = () => {
    setTypes((prev) => {
      if (prev.includes(name)) {
        return prev.filter((type) => type !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  return (
    <TypeStyle type={name} active={types.includes(name)} onClick={handleClick}>
      {name}
    </TypeStyle>
  );
}
