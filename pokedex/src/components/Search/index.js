import React, { useContext, useEffect } from "react";
import { Input, InputContainer, TypesContainer } from "./styles";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import { getTypes } from "../../api/api";
import Type from "./Type";
import SearchContext from "../../context/SearchContext";

export default function Search() {
  const [types, setTypes] = React.useState([]);
  const [loadingTypes, setLoadingTypes] = React.useState(false);

  const { setQuery } = useContext(SearchContext);

  useEffect(() => {
    setLoadingTypes(true);
    getTypes().then((data) => {
      setTypes(data);
      setLoadingTypes(false);
    });
  }, []);

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Search for a pokemon"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <img
        src={SearchIcon}
        alt="Search"
        style={{ position: "absolute", right: 20, top: 16, cursor: "pointer" }}
      />
      {loadingTypes ? (
        <TypesContainer>
          {[...Array(15)].map((_, index) => (
            <Type key={index} name={"loading"} />
          ))}
        </TypesContainer>
      ) : (
        <TypesContainer>
          {types.map((type) => (
            <Type name={type.name} key={type.name} />
          ))}
        </TypesContainer>
      )}
    </InputContainer>
  );
}
