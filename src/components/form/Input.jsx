import React from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form"

const Wrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  justify-content: space-between;
  align-items: start;
  `;

const Label = styled.label`
  color: ${props => props.theme.text.secondary};
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: -0.25px;
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

  &::placeholder {
    font-style: italic;
    opacity: 0.5;
  }
`;

function Input(props) {
  const { register, errors } = useForm();
  const { label, type, placeholder } = props;

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput type={type || "text"} placeholder={placeholder}></StyledInput>
    </Wrapper>
  )
}
export default Input
