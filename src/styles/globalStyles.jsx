import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
     border: 0;
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     text-decoration: none;
   }

   :root {
  --azul-claro: #5081fb;
  --azul-escuro: #051d3b;
  --ciano: #6bd1ff;
  --botao-highlight: rgba(80, 129, 251, 0.08);
  --botao-active: rgba(80, 129, 251, 0.16);
  --branco-transp: rgba(255, 255, 255, 0.64);
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
  font-family: var(--inter);
  background: var(--azul-escuro);
  padding: 1rem;
  height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
}

legend {
  color: #fff;
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
`;