import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IndexHeader from "./IndexHeader";

function InvoicesIndex() {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/invoices")
      .then((res) => res.json())
      .then((data) => setInvoices(data));
  }, []);

  return (
    <div>
      <IndexHeader invoices={invoices}/>
    </div>
  );
}

export default InvoicesIndex;
