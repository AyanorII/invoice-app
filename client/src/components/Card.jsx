import React from "react";
import styled from "styled-components";
import StatusButton from "./StatusButton";
import arrow from "../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom"

const StyledCard = styled(Link)`
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.75fr 1fr;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;

  *:not(button) {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    letter-spacing: 0.25px;
  }

  button {
    justify-self: end;
    grid-column: 2 / 3;
    grid-row: 2 / 4;

    @media (min-width: 768px) {
      justify-self: inherit;
      grid-column: 5 / 6;
      grid-row: 1 / 2;
    }
  }

  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 0.25fr 1fr 1fr 0.75fr 1fr;
    gap: 1.75rem;
    align-items: center;
    justify-items: start;

    &::after {
      content: url(${arrow});
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const Id = styled.h2`
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: 0.25px;

  span {
    color: ${(props) => props.theme.text.secondary};
  }
`;

const Client = styled.p`
  justify-self: end;

  @media (min-width: 768px) {
    justify-self: inherit;
    grid-column: 3 / 4;
  }
`;

const SCDate = styled.p`
  font-weight: medium;
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  @media (min-width: 768px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;

const Total = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.text.primary};
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: end;

  @media (min-width: 768px) {
    align-self: inherit;
    grid-row: 1 / 2;
    grid-column: 4 / 5;
    justify-self: end;
    font-size: 1rem !important;
  }
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
    <StyledCard to={`/invoices/${id}`}>
      <Id><span>#</span>{id}</Id>
      <Client>{client}</Client>
      <SCDate>Due {formatted_date}</SCDate>
      <Total>{formatted_price}</Total>
      <StatusButton status={status}>{status}</StatusButton>
    </StyledCard>
  );
}

export default Card;
