import { css } from 'styled-components';

export const GlobalCSS = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a,
  button,
  input {
    transition: 0.3s ease-in-out;
  }

  button {
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    opacity: 0.5;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  main {
    max-width: 1200px;
    margin: auto;
  }

  @media (min-width: 920px) {
    body {
      background-image: url('/images/body-shape.svg'), url('/images/bg.jpg');
      background-repeat: no-repeat, repeat-x;
      background-position: right top;
    }
  }
`;
