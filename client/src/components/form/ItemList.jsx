import React, { useState } from "react";
import styled from "styled-components";
import AddItemButton from "./AddItemButton";
import Item from "./Item";

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
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

function ItemList() {
  const [items, setItems] = useState([<Item />]);

  const addItem = () => {
    setItems([...items, <Item />]);
  }

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  }

  return (
    <Wrapper>
      <Heading>Item List</Heading>
      {/* <Item /> */}
      <StyledItemList>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </StyledItemList>
      <AddItemButton onClick={addItem}/>
    </Wrapper>
  );
}
export default ItemList;
