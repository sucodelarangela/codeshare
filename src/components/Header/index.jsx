// origin: https://hamburger-react.netlify.app/
import { Divide as Hamburger } from 'hamburger-react';
import { IoSearch, IoLogIn } from 'react-icons/io5';
import LoginModal from './LoginModal.jsx';

import * as Styled from './styles.jsx';

import logo from 'assets/logo.svg';
import { useState } from 'react';
import { useAuthValue } from 'context/AuthContext.jsx';
import { useAuth } from 'hooks/useAuth.js';

export const Header = () => {
  const [showDialog, setShowDialog] = useState(false);
  const { user } = useAuthValue();
  const { logout } = useAuth();

  console.log(user);

  function toggleDialog() {
    setShowDialog((showDialog) => !showDialog);
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
      <Styled.User onClick={user ? logout : toggleDialog} >
        {/* <IoLogIn size={32} />
        <span>Login</span> */}
        {user ? <img src={user.photoURL} alt="" aria-hidden='true' /> : <IoLogIn size={32} />}
        {user ? <span>{user.displayName}</span> : <span>Login</span>}
      </Styled.User>
      {showDialog && <LoginModal setShowDialog={setShowDialog} />}
    </Styled.Header>
  );
};
