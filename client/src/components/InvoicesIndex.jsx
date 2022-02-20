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
  // Fetch invoices from API
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/invoices")
      .then((res) => res.json())
      .then((data) => setInvoices(data));
  }, []);

  const [filters, setFilters] = useState({
    paid: false,
    pending: false,
    draft: false,
  });

  const filterInvoices = (input, checked) => {
    setFilters({ ...filters, [input]: checked });
  };

  const filteredInvoices = invoices.filter((invoice) =>
    Object.values(filters).every((status) => status === false)
      ? invoice
      : filters[invoice.status]
  );

  return (
    <>
      <IndexHeader invoices={invoices} handleChange={filterInvoices} />
      <StyledContainer>
        {invoices &&
          filteredInvoices.map((invoice) => {
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
