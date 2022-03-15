import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../shared/Container";
import GoBackButton from "../shared/GoBackButton";
import InvoiceTopCard from "./InvoiceTopCard";
import { useParams } from "react-router-dom";
import InvoiceDetails from "./InvoiceDetails";

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.theme.body.background};
`;

function Invoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState();

  useEffect(() => {
    fetch(process.env.FIXIE_URL + `/invoices/${id}`)
      .then((res) => res.json())
      .then((data) => setInvoice(data));
  }, []);

  return (
    <StyledContainer>
      <GoBackButton />
      {invoice && <InvoiceTopCard status={invoice.status || ''} />}
      {invoice && <InvoiceDetails invoice={invoice}/>}
    </StyledContainer>
  );
}

export default Invoice;
