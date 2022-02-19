import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IndexHeader from "./IndexHeader";
import Container from "./Container";
import Card from "./Card";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
`;

function InvoicesIndex() {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/invoices")
      .then((res) => res.json())
      .then((data) => setInvoices(data));
  }, []);
  return (
    <>
      <IndexHeader invoices={invoices} />
      <StyledContainer>
        {invoices &&
          invoices.map((invoice) => {
            console.log(invoice.status);
            return (
              <Card
                key={invoice._id}
                id={invoice.id}
                client={invoice.clientName}
                date={invoice.paymentDue}
                total={invoice.total}
                status={invoice.status}
              />
            );
          })}
      </StyledContainer>
    </>
  );
}

export default InvoicesIndex;
