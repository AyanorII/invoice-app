import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const Option = styled.div`
  font-size: 12px;

  label {
    color: ${(props) => props.theme.text.primary};
    font-weight: bold;
  }
`;

function FilterOption(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!e.target.checked);
    console.log("Clicked");
    console.log(checked);
  };

  return (
    <Option>
      <Checkbox
        name={props.name}
        id={props.id}
        checked={checked}
        handleChange={handleChange}
        option={props.children}
      />
    </Option>
  );
}

export default FilterOption;
