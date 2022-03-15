import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import GoBackButton from "../shared/GoBackButton";
import Heading from "../shared/Heading";
import Form from "../form/Form";
import Container from "../shared/Container";
import Loading from "../shared/Loading";

const StyledContainer = styled(Container)`
  @media (min-width: 768px) {
    margin-inline: 15%;
  }

  @media (min-width: 1440px) {
    margin-inline: calc(24.6% - 103px) 24.6%;
  }
`;

function EditInvoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5001/invoices/${id}`)
      .then((res) => res.json())
      .then((inv) => {
        setInvoice(inv);
        setIsLoading(false);
      });
  }, []);

  return (
    <StyledContainer>
      <GoBackButton />
      <Heading>Edit Invoice</Heading>
      {isLoading && <Loading />}
      {invoice && <Form method="put" id={id} invoice={invoice}/>}
    </StyledContainer>
  );
}
export default EditInvoice;
