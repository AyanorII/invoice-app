import React from "react";
import styled from "styled-components";
import userImage from "../assets/image-avatar.jpg";

const Wrapper = styled.div`
  border-left: 1px solid #494e6e;
  padding: 1.25rem 1.5rem;

  @media (min-width: 1440px) {
    border-top: 1px solid #494e6e;
    border-left: 0;
    display: grid;
    place-items: center;
    padding: 1.5rem 2rem;
  }
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  @media (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;

function Avatar() {
  return (
    <Wrapper>
      <Image src={userImage} />
    </Wrapper>
  );
}

export default Avatar;
