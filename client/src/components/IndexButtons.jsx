import React from "react";
import styled from "styled-components";
import FilterButton from "./filter/FilterButton";
import Button from "./shared/Button";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1440px) {
    gap: 2.5rem;
  }
`;

const NewInvoiceButton = styled(Button)`
  padding-right: 15px;

  .icon {
    background-color: #fff;
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: 50%;
    margin-right: 0.5rem;
    display: grid;
    place-items: center;
    align-self: center;
    font-size: 1rem;
    color: ${(props) => props.theme.purple.primary};
    position: relative;

    &:before {
      content: "+";
      position: relative;
      top: 1px;
    }
  }

  .tablet {
    display: none;

    @media (min-width: 768px) {
      display: inline-block;
      margin-left: 5px;
    }
  }
`;

function IndexButtons({handleChange}) {
  return (
    <Container>
      <FilterButton handleChange={handleChange}/>
      <NewInvoiceButton to="/" variant="new">
        <span className="icon"></span>
        New
        <span className="tablet">Invoice</span>
      </NewInvoiceButton>
    </Container>
  );
}

export default IndexButtons;
