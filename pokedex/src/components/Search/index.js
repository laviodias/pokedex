import React, { useContext, useEffect, useState } from "react";
import { Input, InputContainer, TypesContainer } from "./styles";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import Type from "./Type";
import SearchContext from "../../context/SearchContext";
import { getTypes } from "../../assets/js/utils";

export default function Search() {
  const types = getTypes;
  const { setQuery, query } = useContext(SearchContext);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (query === "") {
      setValue("");
    }
  }, [query]);

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Search for a pokemon"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setQuery(e.target.value);
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="Search"
        style={{ position: "absolute", right: 20, top: 16, cursor: "pointer" }}
      />
      <TypesContainer>
        {types.map((type) => (
          <Type name={type} key={type} />
        ))}
      </TypesContainer>
    </InputContainer>
  );
}
