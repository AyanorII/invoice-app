import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IndexHeader from "../IndexHeader";
import Container from "../shared/Container";
import Card from "./InvoiceCard";
import Loading from "../shared/Loading";
import NoInvoices from "../NoInvoices";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  margin-bottom: 6.5625rem;

  @media (min-width: 768px) {
    margin-bottom: 10.8125rem;
  }

  @media (min-width: 1440px) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
`;

function InvoicesIndex() {
  // Fetch invoices from API
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetch("https://ayanori-invoice-app-server.herokuapp.com/invoices")
      .then((res) => res.json())
      .then((data) => {
        setInvoices(data || "empty");
        setIsLoading(false);
      });
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

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <IndexHeader invoices={filteredInvoices} handleChange={filterInvoices} />
      <StyledContainer>
        {isLoading && <Loading />}
        {!isLoading && invoices.length === 0 && <NoInvoices />}
        {invoices &&
          filteredInvoices.map((invoice) => {
            return (
              <Card
                key={invoice._id}
                to={invoice.invoiceId}
                id={invoice.invoiceId}
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
