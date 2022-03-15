import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../shared/Button";
import Container from "../shared/Container";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-block: 1rem;
  background-color: ${(props) => props.theme.background};

  button,
  a {
    padding-inline: 0.75rem;
    font-size: 0.7rem;
    justify-content: center;
  }

  .save-send-button {
    padding: 1.125rem 1.5rem;
  }

  @media (min-width: 1440px) {
    padding-inline: 22.6%;
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 0.6fr 0.85fr 1fr;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-inline: 5.5%;
  margin: 0;

  @media (min-width: 768px) {
    padding-inline: 15%;
  }

  @media (min-width: 1440px) {
    padding-inline: 0;
  }
`;

function FormFooter({ handleDraft }) {
  const { id } = useParams();

  return (
    <Footer>
      <StyledContainer>
        <Button to={id ? `/invoices/${id}` : "/"} variant="edit">
          Discard
        </Button>
        <Button as="button" onClick={handleDraft} variant="edit">
          Save as Draft
        </Button>
        <Button className="save-send-button" as="button" variant="new">
          Save & Send
        </Button>
      </StyledContainer>
    </Footer>
  );
}
export default FormFooter;
