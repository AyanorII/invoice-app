import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "./Container";
import GoBackButton from "./GoBackButton";
import InvoiceTopCard from "./InvoiceTopCard";
import { useParams } from "react-router-dom";

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.theme.body.background};
`;

function Invoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5001/invoices/${id}`)
      .then((res) => res.json())
      .then((data) => setInvoice(data[0]));
  }, []);

  console.log(invoice);

  return (
    <StyledContainer>
      <GoBackButton />
      <InvoiceTopCard status={invoice.status || ''} />
    </StyledContainer>
  );
}

export default Invoice;
