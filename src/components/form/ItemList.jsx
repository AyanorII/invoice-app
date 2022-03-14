import React, { useState } from "react";
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

function ItemList() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  return (
    <Wrapper>
      <Heading>Item List</Heading>
      {/* <Item /> */}
      <StyledItemList>
        {fields.map((field, index) => (
          <Item key={field.id} index={index} remove={remove}/>
        ))}
      </StyledItemList>
      <AddItemButton onClick={() => append({})} />
    </Wrapper>
  );
}
export default ItemList;
