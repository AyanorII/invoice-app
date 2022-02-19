import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

function IndexButtons() {
  return (
    <Container>
      <FilterButton />
    </Container>
  );
}

export default IndexButtons;
