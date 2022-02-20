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
  height: 0;
  padding: 0;
  overflow: hidden;
  transition: all 0.35s;
  box-shadow: 0.5px 3.3px 2.9px rgba(0, 0, 0, 0.03),
    1.1px 8px 7px rgba(0, 0, 0, 0.036), 2.1px 15.2px 13.3px rgba(0, 0, 0, 0.039),
    3.8px 27px 23.7px rgba(0, 0, 0, 0.042),
    7.1px 50.6px 44.3px rgba(0, 0, 0, 0.05),
    17px 121px 106px rgba(0, 0, 0, 0.08);

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
      <FilterOption id="draft" name="draft" handleChange={props.handleChange}>
        Draft
      </FilterOption>
      <FilterOption
        id="pending"
        name="pending"
        handleChange={props.handleChange}
      >
        Pending
      </FilterOption>
      <FilterOption id="paid" name="paid" handleChange={props.handleChange}>
        Paid
      </FilterOption>
    </Container>
  );
}

export default FilterModal;
