import React from "react";
import styled from "styled-components";

const status = {
  pending: "#FF8F00",
  paid: "#33D69F",
  draft: "#979797",
};

const StyledButton = styled.button`
  text-align: center;
  background-color: ${(props) => status[props.status]}30;
  border-radius: 6px;
  min-width: 104px;
  min-height: 40px;
  border: none;
  outline: none;
  color: ${(props) => status[props.status]};
  font-weight: bold;
  display: grid;
  place-items: center;
`;

const Status = styled.div`
  font-family: "Spartan", "sans-serif";
`;

const Dot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => status[props.status]};
  margin-right: 4px;
`;

function StatusButton(props) {
  const formatted_string =
    props.status.slice(0, 1).toUpperCase() + props.status.slice(1);

  return (
    <StyledButton status={props.status}>
      <Status>
        <Dot status={props.status} />
        {formatted_string}
      </Status>
    </StyledButton>
  );
}

export default StatusButton;
