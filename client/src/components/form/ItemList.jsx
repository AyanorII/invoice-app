import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddItemButton from "./AddItemButton";
import Item from "./Item";
import { useFieldArray, useFormContext } from "react-hook-form";

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const StyledItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.text.secondary};
  font-size: 1.5rem;
  font-weight: bold;
`;

function ItemList({ invoice }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  useEffect(() => {
    // If editing an invoice, populates the item field, with each item details
    if (window.location.pathname.includes("/edit")) {
      invoice.items.forEach((item) => append(item));
    }
    // Shows one item field when page is loaded
    if (fields.length === 0) {
      append({});
    }
  }, []);

  return (
    <Wrapper>
      <Heading>Item List</Heading>
      <StyledItemList>
        {fields.map((field, index) => (
          <Item
            key={field.id}
            index={index}
            remove={remove}
            itemName={
              invoice && invoice.items[index] ? invoice.items[index].name : ""
            }
            itemQuantity={
              invoice && invoice.items[index]
                ? invoice.items[index].quantity
                : ""
            }
            itemPrice={
              invoice && invoice.items[index] ? invoice.items[index].price : ""
            }
          />
        ))}
      </StyledItemList>
      <AddItemButton onClick={() => append({})} />
    </Wrapper>
  );
}
export default ItemList;
