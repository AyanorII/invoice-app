import React, { useState } from "react";
import styled from "styled-components";
import chevron from "../assets/icon-arrow-down.svg";
import FilterModal from "./FilterModal";

const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-family: "Spartan", sans-serif;
  font-size: 0.75rem;
  padding: 1rem 1.25rem 1rem 1rem;
  cursor: pointer;

  &::after {
    content: url(${chevron});
    color: #7c5dfa;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.35s;
  }
  &.open::after {
    transform: translateY(-50%) rotate(180deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

function FilterButton(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Wrapper>
      <Button onClick={handleClick} className={expanded && "open"}>
        Filter
      </Button>
      <FilterModal expanded={expanded} handleChange={props.handleChange}/>
    </Wrapper>
  );
}

export default FilterButton;
