import React from "react";
import styled from "styled-components";
import illustration from "../assets/page-not-found.png";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 80px - 82px);
  text-align: center;
  grid-column: 1 / -1;

  h1 {
    font-size: 2rem;
    margin-bottom: 4rem;

    @media (min-width: 1440px) {
      font-size: 2.5rem;
    }
  }

  img {
    max-width: 300px;

    @media (min-width: 1440px) {
      max-width: 500px;
    }
  }

  @media (min-width: 1440px) {
    min-height: 100vh;
  }
`;

function Page404() {
  return (
    <Wrapper>
      <div>
        <h1>Page not Found...</h1>
        <img src={illustration} alt="Page not found" />
      </div>
    </Wrapper>
  );
}
export default Page404;
