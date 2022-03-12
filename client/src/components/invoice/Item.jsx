import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  row-gap: 0.5rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: ${(props) => props.theme.text.primary};

  p:nth-child(2) {
    grid-column: 1 / 2;
  }

  p:nth-child(3) {
    justify-self: end;
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }

  .secondary-color {
    color: ${(props) => props.theme.text.secondary};
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

function Item({ item }) {
  const get_formatted_price = (number) => number.toLocaleString("en-UK", {
    style: "currency",
    currency: "EUR",
  })

  return (
    <StyledItem>
      <p>{item.name}</p>
      <p className="secondary-color">
        {item.quantity} x {get_formatted_price(item.price)}
      </p>
      <p>{get_formatted_price(item.total)}</p>
    </StyledItem>
  );
}

export default Item;
