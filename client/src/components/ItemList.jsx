import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Item from './Item';

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.body.background};
  grid-column: 1 / -1;
  position: relative;
  padding-bottom: 5rem;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }
`;

const Total = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  p:nth-child(2) {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

function ItemList(props) {
  const formatted_price = props.total.toLocaleString('en-UK', {
    style: 'currency',
    currency: 'EUR',
  })

  return (
    <StyledCard>
      {props.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
      <Total>
        <p>Grand Total</p>
        <p>{formatted_price}</p>
      </Total>
    </StyledCard>
  );
}

export default ItemList
