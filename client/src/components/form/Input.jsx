import React, { useState } from "react";
import styled from "styled-components";
import { useFormContext, Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage"
import Label from "./Label";

const Wrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
  justify-content: space-between;
  align-items: start;

  &.city {
    grid-column: 1 / 2;
  }

  &.postcode {
    grid-column: 2 / 3;
  }
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.text.secondary}50;
  outline: none;
  color: ${(props) => props.theme.text.primary};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 1rem 1.25rem;
  border-radius: 5px;
  letter-spacing: 0.25px;
  width: 100%;
  grid-column: 1 / -1;

  &::placeholder {
    font-style: italic;
    opacity: 0.5;
    letter-spacing: 0.5px;
  }
`;

const Input = (props) => {
  const { label, type, placeholder } = props;
  const { control, formState: {errors} } = useFormContext();
  const [value, setValue] = useState("");

  return (
    <Wrapper className={props.className}>
      <Label>{label}</Label>
      {errors[props.name] && <ErrorMessage>{errors[props.name].message}</ErrorMessage>}
      <Controller
        name={props.name}
        control={control}
        rules={props.rules}
        render={({ field }) => (
          <StyledInput
            placeholder={placeholder}
            type={type || "text"}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              field.onChange(e.target.value);
            }}
          />
        )}
      />
    </Wrapper>
  );
};
export default Input;
