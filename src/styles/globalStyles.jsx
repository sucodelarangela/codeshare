import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 1rem;
    transition: .3s;
    color: var(--white);
  }
      
  :root {
    /* Colors */
    --light-blue: #5081fb;
    --dark-blue: #051d3b;
    --input: rgba(255, 255, 255, .16);
    --input-hover: rgba(255, 255, 255, .24);
    --white: rgba(255, 255, 255, 1);
    --cian: #6bd1ff;
    --botao-highlight: rgba(80, 129, 251, 0.08);
    --botao-active: rgba(80, 129, 251, 0.16);
    --laranja: #ffc46b;
    --linha: rgba(255, 255, 255, 1);
    --menu-mobile: #2d415b;
    --rosa: #ff6bcd;
    --roxo: #5f75e2;
    --user-hover: rgba(255, 255, 255, 0.08);
    --verde: #9aff6b;

    --inter: 'Inter', sans-serif;
    --roboto: 'Roboto Mono', monospace;
  }

  body {
    background: var(--dark-blue);
    padding: 1rem;
    height: 100vh;
    @media screen and (min-width: 768px) {
      padding: 2rem;
    }
  }

  body, button, input, textarea {
    font-family: var(--inter);
    color: var(--white);
  }

  a {
    cursor: pointer;
  }

  legend {
    padding-bottom: 1rem;
  }

  .home {
    @media screen and (min-width: 1280px) {
      display: grid;
      grid-template-areas: 'menu editor form';
      grid-template-columns: 17rem auto 17rem;
      gap: 2.5rem;
    }
  }

  .sr-only {
    position: absolute;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
`;