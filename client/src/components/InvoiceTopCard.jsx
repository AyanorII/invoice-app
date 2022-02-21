import React from "react";
import styled from "styled-components";
import Button from "./Button";
import StatusButton from "./StatusButton";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: ${(props) => props.theme.background};
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 0 10px 0 #00000025;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    width: auto;
    gap: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.body.background};
  padding: 1.25rem 1.5rem;

  @media (min-width: 768px) {
    position: static;
    justify-self: flex-end;
    width: auto;
    padding: 0;
    gap: 0.5rem;
    max-width: unset;
    transform: unset;
  }
`;

function InvoiceTopCard(props) {
  return (
    <Card>
      <StatusContainer>
        <p>Status</p>
        <StatusButton status={props.status} />
      </StatusContainer>
      <ButtonsContainer>
        <Button to="/" variant="edit" color="#000">
          Edit
        </Button>
        <Button to="/" variant="delete">
          Delete
        </Button>
        <Button to="/" variant="mark">
          Mark as Paid
        </Button>
      </ButtonsContainer>
    </Card>
  );
}

export default InvoiceTopCard;