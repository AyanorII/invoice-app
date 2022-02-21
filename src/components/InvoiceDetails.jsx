import React from "react";
import styled from "styled-components";
import Card from "./Card";
import ItemList from "./ItemList";

const StyledCard = styled(Card)`
  color: ${(props) => props.theme.text.secondary};
  font-size: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 7.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.875rem;

  .bold {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme.text.primary};
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1440px) {
    padding: 3rem;
  }
`;

const Id = styled.p`
  margin-bottom: 0.25rem;

  span {
    color: ${(props) => props.theme.text.secondary};
  }
`;

const SenderAddress = styled.div`
  grid-column: 1 / 3;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    justify-self: end;
  }
`;

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  grid-column: 1 / 2;
`;

const BillTo = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 5;
  height: 100%;

  p {
    line-height: 1.2rem;
  }

  p:first-of-type {
    margin-bottom: 0.5rem;
  }

  p:nth-of-type(2) {
    margin-bottom: 0.25rem;
  }

  @media (min-width: 768px) {
    grid-row: 2 / 4;
  }
`;

const SentTo = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
`

function InvoiceDetails({ invoice }) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const get_formatted_date = (date) => {
    return (new Date(date).toLocaleDateString("en-UK", options));
  };

  return (
    <StyledCard>
      <div>
        <Id className="bold">
          <span>#</span>
          {invoice.invoiceId}
        </Id>
        <p>{invoice.description}</p>
      </div>
      <SenderAddress>
        <p>{invoice.senderAddress.street}</p>
        <p>{invoice.senderAddress.city}</p>
        <p>{invoice.senderAddress.postCode}</p>
        <p>{invoice.senderAddress.country}</p>
      </SenderAddress>
      <Dates>
        <p>Invoice Date</p>
        <p className="bold">{get_formatted_date(invoice.createdAt)}</p>
      </Dates>
      <Dates>
        <p>Payment Due</p>
        <p className="bold">{get_formatted_date(invoice.paymentDue)}</p>
      </Dates>
      <BillTo>
        <p>Bill To</p>
        <p className="bold">{invoice.clientName}</p>
        <p>{invoice.clientAddress.street}</p>
        <p>{invoice.clientAddress.city}</p>
        <p>{invoice.clientAddress.postCode}</p>
        <p>{invoice.clientAddress.country}</p>
      </BillTo>
      <SentTo>
        <p>Sent to</p>
        <p className="bold">{invoice.clientEmail}</p>
      </SentTo>
      <ItemList items={invoice.items} total={invoice.total}/>
    </StyledCard>
  );
}

export default InvoiceDetails;
