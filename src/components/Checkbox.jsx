import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  .b-contain *,
  .b-contain *::before,
  .b-contain *::after {
    box-sizing: content-box !important;
  }

  .b-contain {
    display: table;
    position: relative;
    padding-left: 2.31rem;
    cursor: pointer;
    margin-bottom: 0.5rem;

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    span {
      line-height: 1.61;
      font-size: 0.75rem;
      font-family: inherit;
      position: relative;
      top: 3px;
    }

    &:hover input[type="checkbox"] ~ .b-input {
      border: 1px solid ${(props) => props.theme.purple.primary};
    }
  }

  .b-contain input[type="checkbox"] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background-color: ${(props) =>
      props.theme.background.length > 4
        ? props.theme.body.background
        : "#DFE3FA"};
    transition: all 250ms;
    border-radius: 0.228rem;
    border: 1px solid ${(props) => props.theme.body.background};

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 0.45rem;
      top: 0.23rem;
      width: 0.23rem;
      height: 0.43rem;
      border: solid rgba(255, 255, 255, 1);
      border-width: 0 2px 2px 0;
      transition: background 250ms;
      transform: rotate(45deg);
    }
  }

  .b-contain input:checked ~ .b-input::after {
    display: block;
  }

  .b-contain input:checked ~ .b-input {
    background: rgba(124, 93, 250, 1);
  }
`;

function Checkbox(props) {
  const handleChange = (e) => {
    const option = props.option.toLowerCase();
    const checked = e.target.checked;
    props.handleChange(e);
    props.handleFilter(option, checked);
  };

  return (
    <StyledCheckbox>
      <label className="b-contain">
        <span>{props.option}</span>
        <input type="checkbox" onChange={(e) => handleChange(e)} />
        <div className="b-input"></div>
      </label>
    </StyledCheckbox>
  );
}

export default Checkbox;
