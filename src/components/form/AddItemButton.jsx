import React from 'react'
import styled from 'styled-components';
import Button from "../shared/Button";

const AddButton = styled(Button)`
  text-align: center;
  justify-content: center;
  background: ${props => props.theme.text.primary};
  padding-block: 1rem;
  margin-top: 1.5rem;

`;

function AddItemButton(props) {
  return (
    <AddButton to="" variant="edit" onClick={props.onClick}>+ Add New Item</AddButton>
  )
}
export default AddItemButton
