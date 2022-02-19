import React from "react";
import styled from "styled-components";
import StatusButton from "./StatusButton";

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  *:not(button) {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    letter-spacing: 0.25px;
  }
`;

const Client = styled.p`
  justify-self: end;
`;

const SCDate = styled.p`
  font-weight: medium;
`;

const Total = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.text.primary};
`;

const Wrapper = styled.div`
  align-items: end;
  display: grid;
  row-gap: 5px;
`;

function Card({ id, client, date, total, status }) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatted_date = new Date(date).toLocaleDateString("en-UK", options);

  const formatted_price = total.toLocaleString("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <StyledCard>
      <h2>#{id}</h2>
      <Client>{client}</Client>
      <Wrapper>
        <SCDate>{formatted_date}</SCDate>
        <Total>{formatted_price}</Total>
      </Wrapper>
      <StatusButton status={status}>{status}</StatusButton>
    </StyledCard>
  );
}

export default Card;
