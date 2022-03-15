import React from 'react'
import styled from 'styled-components';
import { Triangle } from "react-loader-spinner";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`;

function Loading() {
  return (
    <Wrapper>
      <Triangle height={200} width={200}/>
    </Wrapper>
  )
}
export default Loading
