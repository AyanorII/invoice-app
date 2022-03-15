import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom"
import Button from "../shared/Button";
import StatusButton from "./StatusButton";
import Card from "../shared/Card";

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
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
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.25rem 1.5rem;
  z-index: 1;
  background: ${(props) => props.theme.background};

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

const markAsPaid = (id) => {
  const uri = `http://localhost:5001/invoices/${id}/paid`;
  const options = {
    method: "PUT",
  };
  fetch(uri, options).then((response) => {
    if (response.status === 200) {
      window.location.href=`/invoices/${id}`
    };
  });
};

const destroy = (id) => {
  const uri = `http://localhost:5001/invoices/${id}`;
  const options = {
    method: "DELETE",
  };
  fetch(uri, options).then((response) => {
    if (response.status === 200) {
      window.location.href=`/invoices`
    };
  });
}


function InvoiceTopCard(props) {
  const { id } = useParams();
  console.log(id);

  return (
    <StyledCard>
      <StatusContainer>
        <p>Status</p>
        <StatusButton status={props.status} />
      </StatusContainer>
      <ButtonsContainer>
        <Button to="/" variant="edit">
          Edit
        </Button>
        <Button as="button" onClick={() => destroy(id)} variant="delete">
          Delete
        </Button>
        <Button as="button" onClick={() => markAsPaid(id)} variant="mark">
          Mark as Paid
        </Button>
      </ButtonsContainer>
    </StyledCard>
  );
}

export default InvoiceTopCard;
