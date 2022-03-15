import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../shared/Container";
import GoBackButton from "../shared/GoBackButton";
import InvoiceTopCard from "./InvoiceTopCard";
import { useParams } from "react-router-dom";
import InvoiceDetails from "./InvoiceDetails";
import Loading from "../shared/Loading";

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.theme.body.background};
`;

function Invoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5001/invoices/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInvoice(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <StyledContainer>
      <GoBackButton />
      {isLoading && <Loading />}
      {invoice && <InvoiceTopCard status={invoice.status || ''} />}
      {invoice && <InvoiceDetails invoice={invoice}/>}
    </StyledContainer>
  );
}

export default Invoice;
