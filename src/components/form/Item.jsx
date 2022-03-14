import React, {useState} from "react";
import styled from "styled-components";
import Input from "./Input";
import { BsFillTrashFill } from "react-icons/bs";

const StyledItem = styled.li`
  display: grid;
  grid-template-areas:
    "name name name name"
    "qty price total delete";
  row-gap: 1.5rem;
  column-gap: 1rem;
  list-style-type: none;
  margin-top: 1rem;

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
    border: none;
    background-color: transparent;
    align-self: end;
    position: relative;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

function Item({ index, remove }) {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e));
    setTotal(e * price || 0);
  }

  const handlePriceChange = (e) => {
    setPrice(parseInt(e));
    setTotal(quantity * e || 0);
  }

  return (
    <StyledItem>
      <Input
        name={`items[${index}].name`}
        label="Item Name"
        placeholder="Banner Design"
        className="name"
        rules={{ required: "Cannot be empty" }}
      />
      <Input
        name={`items[${index}].quantity`}
        type="number"
        label="Qty."
        placeholder="1"
        className="quantity"
        onChange={handleQuantityChange}
        rules={{ required: "Cannot be empty" }}
      />
      <Input
        name={`items[${index}].price`}
        type="number"
        label="Price"
        placeholder="156.00"
        className="price"
        onChange={handlePriceChange}
        rules={{ required: "Cannot be empty" }}
      />
      <Input
        name={`items[${index}].total`}
        label="Total"
        readOnly
        placeholder={total}
        className="total"
        value={total}
      />
      <button
        type="button"
        className="delete"
        onClick={() => {
          remove(index)
        }}
      >
        <BsFillTrashFill />
      </button>
    </StyledItem>
  );
}
export default Item;
