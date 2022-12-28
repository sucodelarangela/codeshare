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
  }  
  
  :root {
    /* Colors */
    --black: #141414;
    --cian: #6bd1ff;
    --highlight-btn: rgba(80, 129, 251, 0.08);
    --highlight-hover: rgba(80, 129, 251, 0.16);
    --highlight-active: rgba(80, 129, 251, 0.24);
    --light-blue: #5081fb;
    --dark-blue: #051d3b;
    --overlay: rgba(0, 0, 0, .5);
    --input: rgba(255, 255, 255, .16);
    --input-hover: rgba(255, 255, 255, .24);
    --white: rgba(255, 255, 255, 1);
    --dark-red: #721c24;
    --light-red: #f8d7da;
    --red-border: #f5c6cb;
    --laranja: #ffc46b;
    --linha: rgba(255, 255, 255, 1);
    --menu-mobile: #2d415b;
    --rosa: #ff6bcd;
    --roxo: #5f75e2;
    --user-hover: rgba(255, 255, 255, 0.08);
    --verde: #9aff6b;

    --inter: 'Inter', sans-serif;
    --roboto: 'Roboto Mono', monospace;
    --rubik: 'Rubik 80s Fade', monospace;
  }  

  body {
    background: var(--black);
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

  h3 {
    padding-bottom: 0;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: .4rem;
  }  

  a {
    cursor: pointer;
  }  

  legend {
    padding-bottom: 1rem;
  }

  pre > code > span > span {
    font-family: var(--roboto);
    font-size: 14px;
  }

  .home {
    @media screen and (min-width: 1280px) {
      display: grid;
      grid-template-areas: 'menu editor form';  
      grid-template-columns: 17rem auto 17rem;
      gap: 2.5rem;
    }
  }  

  .community, .dashboard {
    @media screen and (min-width: 1280px) {
      display: grid;
      grid-template-areas: 'menu cards';
      grid-template-columns: 17rem auto;
      gap: 2.5rem;
    }  
  }

  .codelist {
    @media screen and (min-width: 1280px) {
      grid-area: cards;
    }
  }

  .cards {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 100%;
    @media screen and (min-width: 1280px) {
      grid-template-rows: auto;  
      grid-area: cards;
    }
  }  

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--overlay);
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