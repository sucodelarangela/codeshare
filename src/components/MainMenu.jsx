import { NavBtn } from './NavBtn';
import styled from 'styled-components';
import { FaCode, FaUsers } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { useAuthValue } from 'context/AuthContext';

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
    position: fixed;
    left: 32px;
    border: 1px solid red;
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

// eslint-disable-next-line react/display-name
export default () => {
  const { user } = useAuthValue();

  return (
    <MainMenu>
      <h3>Menu</h3>
      <NavBtn route='/'>
        <FaUsers size={32} color='#6bd1ff' />
        Comunidade
      </NavBtn>
      <NavBtn route='/editor'>
        <FaCode size={32} color='#6bd1ff' />
        Editor de código
      </NavBtn>
      {user ? (
        <NavBtn route='/dashboard'>
          <GoGraph size={32} color='#6bd1ff' />
          Dashboard
        </NavBtn>
      ) : (
        ''
      )}
    </MainMenu>
  );
};

