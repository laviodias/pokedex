import React, { useContext, useState } from "react";
import SearchContext from "../../context/SearchContext";
import { TypeStyle } from "./styles";

export default function Type({ name }) {
  const [active, setActive] = useState(false);
  const { setTypes } = useContext(SearchContext);

  const handleClick = () => {
    setActive((prev) => !prev);
    setTypes((prev) => {
      if (prev.includes(name)) {
        return prev.filter((type) => type !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  return (
    <TypeStyle type={name} active={active} onClick={handleClick}>
      {name}
    </TypeStyle>
  );
}
