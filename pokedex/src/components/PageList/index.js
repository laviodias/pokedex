import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import { PageButton, PaginationContainer } from "./styles";

export default function PageList() {
  const { page, setPage, totalPages } = useContext(SearchContext);

  return (
    <PaginationContainer>
      {page > 2 && (
        <>
          <PageButton onClick={() => setPage(1)}>1</PageButton>
          <PageButton
            onClick={() => setPage(page === 3 ? page - 2 : page - 3)}
          >{`<<`}</PageButton>
        </>
      )}
      {page > 1 && (
        <PageButton onClick={() => setPage(page - 1)}>{page - 1}</PageButton>
      )}
      <PageButton disabled>{page}</PageButton>
      {page < totalPages && (
        <PageButton
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {page + 1}
        </PageButton>
      )}
      {page === 1 && (
        <PageButton onClick={() => setPage(page + 2)}>{page + 2}</PageButton>
      )}
      {page < totalPages - 1 && (
        <>
          <PageButton
            onClick={() =>
              setPage(page === totalPages - 2 ? page + 2 : page + 3)
            }
          >{`>>`}</PageButton>
          <PageButton onClick={() => setPage(totalPages)}>
            {totalPages}
          </PageButton>
        </>
      )}
    </PaginationContainer>
  );
}
