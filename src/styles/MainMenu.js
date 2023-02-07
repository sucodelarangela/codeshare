import styled from 'styled-components';

export const MainMenu = styled.div`
  display: none;
  .MuiMasonry-root {
    width: auto;
  } 
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    grid-area: menu;
    width: 17rem;
    position: fixed;
    left: 32px;
    & a {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--white);
      opacity: .56;
      &:hover, &:focus {
        opacity: .8;
      }
      &.active {
        opacity: 1;
      }
  }
}
`;
