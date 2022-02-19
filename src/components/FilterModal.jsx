import React from "react";
import styled from "styled-components";
import FilterOption from "./FilterOption";

const Container = styled.div`
  position: absolute;
  right: -50%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  gap: 1rem;
  border-radius: 14px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 0;
  padding: 0;
  overflow: hidden;
  transition: all 0.35s;

  * {
    transition: all 0.35s;
    opacity: 0;
  }

  &.expanded {
    padding: 1.5rem 2rem;
    height: 160px;

    & * {
      opacity: 1;
    }
  }
`;

function FilterModal(props) {
  return (
    <Container className={props.expanded && "expanded"}>
      <FilterOption id="draft" name="draft">
        Draft
      </FilterOption>
      <FilterOption id="pending" name="pending">
        Pending
      </FilterOption>
      <FilterOption id="paid" name="paid">
        Paid
      </FilterOption>
    </Container>
  );
}

export default FilterModal;
