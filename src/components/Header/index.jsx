// origin: https://hamburger-react.netlify.app/
import { Divide as Hamburger } from 'hamburger-react';
import { IoSearch, IoLogIn } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import LoginModal from './LoginModal.jsx';

import * as Styled from './styles.jsx';

import logo from 'assets/logo.svg';
import { useState } from 'react';
import { useAuthValue } from 'context/AuthContext.jsx';
import Menu from './Menu.jsx';

export const Header = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useAuthValue();

  console.log(user);

  function toggleDialog() {
    setShowDialog((showDialog) => !showDialog);
  }

  function toggleMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  return (
    <Styled.Header>
      <img src={logo} alt="Codeshare home" />
      <label htmlFor="home__search" className='sr-only'>Busque por algo</label>
      <Styled.Search id='home__search' type='text' placeholder='Busque por algo...' />
      <Styled.MenuWrapper>
        <button><IoSearch size={32} /></button>
        <Hamburger size={32} label='Abrir menu' />
      </Styled.MenuWrapper>
      <Styled.User onClick={user ? toggleMenu : toggleDialog} >
        {/* <IoLogIn size={32} />
        <span>Login</span> */}
        {user ? user.photoURL ? <img src={user.photoURL} alt="" aria-hidden='true' /> : <FaUser size={32} /> : <IoLogIn size={32} />}
        {user ? <span>{user.displayName}</span> : <span>Login</span>}
      </Styled.User>
      {showDialog && <LoginModal setShowDialog={setShowDialog} />}
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </Styled.Header>
  );
};
