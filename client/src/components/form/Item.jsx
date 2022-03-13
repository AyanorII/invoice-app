import React from "react";
import styled from "styled-components";
import Input from "./Input";

const StyledItem = styled.li`
  display: grid;
  grid-template-areas:
    "name name name name"
    "qty price total delete";
  row-gap: 1.5rem;
  column-gap: 1rem;
  list-style-type: none;

  .name {
    grid-area: name;
  }

  .quantity {
    grid-area: qty;
  }

  .price {
    grid-area: price;
  }

  .total {
    grid-area: total;
  }

  .delete {
    grid-area: delete;
  }
`;

function Item({ item }) {
  return (
    <StyledItem>
      <Input
        name="itemName"
        label="Item Name"
        placeholder="Banner Design"
        className="name"
        rules={{ required: "Cannot be empty" }}
      />
      <Input
        name="quantity"
        type="number"
        label="Qty."
        placeholder="1"
        className="quantity"
        rules={{ required: "Cannot be empty" }}
      />
      <Input
        name="price"
        type="number"
        label="Price"
        placeholder="156.00"
        className="price"
        rules={{ required: "Cannot be empty" }}
      />
      <Input
        name="total"
        type="disabled"
        label="Total"
        placeholder="156.00"
        className="total"
        rules={{ required: "Cannot be empty" }}
      />
      <button className="delete">trash</button>
    </StyledItem>
  );
}
export default Item;
