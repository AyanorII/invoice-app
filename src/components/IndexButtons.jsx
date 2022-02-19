import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const NewInvoiceButton = styled(Button)`
  padding-right: 15px;

  span {
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
`;

function IndexButtons() {
  return (
    <Container>
      <FilterButton />
      <NewInvoiceButton to="/" variant="new">
        <span></span>
        New
      </NewInvoiceButton>
    </Container>
  );
}

export default IndexButtons;
