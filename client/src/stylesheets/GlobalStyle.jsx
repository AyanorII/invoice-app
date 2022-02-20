import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${(props) => props.theme.body.background};
    transition: all 0.35s;
    color: ${(props) => props.theme.text.secondary};
    font-family: "Spartan", sans-serif;
    font-weight: 500;
  }

  h1, h2, h3, h4, a, button {
    color: ${(props) => props.theme.text.primary};
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  .App {
    @media (min-width: 1440px) {
      display: grid;
      grid-template-columns: 103px 1fr;
      grid-template-rows: auto auto;
    }
  }
`;

export default GlobalStyle;
