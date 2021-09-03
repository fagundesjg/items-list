import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        background-color: white;
    }
`;

const Container = styled.div`
  min-height: 100vh;
`;

const SnkrContainer = styled.div`
  background-color: #fcfcfc;
  padding: 16px;

  img {
    width: 100%;
    height: auto;
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;

export { Container, GlobalStyle, SnkrContainer };
