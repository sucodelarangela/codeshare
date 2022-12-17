import { NavBtn } from './NavBtn';
import styled from 'styled-components';

import editorIcon from 'assets/editor_icon.svg';
import commIcon from 'assets/comm_icon.svg';

const MainMenu = styled.div`
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
    & a {
      display: flex;
      align-items: center;
      gap: 1rem;
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

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <MainMenu>
      <h3>Menu</h3>
      <NavBtn route='/' src={editorIcon}>Editor de código</NavBtn>
      <NavBtn route='/community' src={commIcon}>Comunidade</NavBtn>
    </MainMenu>
  );
};

