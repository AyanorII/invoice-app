import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Container from "../shared/Container"

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.background};

  & > div {
    display: grid;
    grid-template-columns: 0.6fr 0.85fr 1fr;
    gap: 0.5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  button, a {
    padding-inline: 0.75rem;
    font-size: 0.7rem;
    justify-content: center;
  }

  .save-send-button {
    padding: 1.125rem 1.5rem;
  }
`;

function FormFooter() {
  return (
    <Footer>
      <Container>
        <Button as="button" variant="edit">
          Discard
        </Button>
        <Button as="button" variant="edit">
          Save as Draft
        </Button>
        <Button className="save-send-button" as="button" variant="new">
          Save & Send
        </Button>
      </Container>
    </Footer>
  );
}
export default FormFooter;
