import * as S from 'styles/Menu';
import * as Toast from '@radix-ui/react-toast';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth.js';
import { useState } from 'react';
import { useAuthValue } from 'context/AuthContext';
import { NavBtn } from 'components/NavBtn';
import { FaCode, FaSignInAlt, FaUsers } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { IoCreate, IoInformationCircle } from 'react-icons/io5';

export const Menu = ({ setShowMenu }) => {
  const [open, setOpen] = useState(false);
  const { logout, deleteAccount } = useAuth();
  const { user } = useAuthValue();

  async function handleDelete() {
    deleteAccount();
    setShowMenu(false);
  }

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        setShowMenu(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        logout();
        setShowMenu();
      }, 2100);
    }
  }, [open]);

  return (
    <S.Menu>
      <Toast.Provider swipeDirection='left' duration={2000}>
        <NavBtn route='/'>
          <FaUsers size={32} color='#6bd1ff' />
          Comunidade
        </NavBtn>
        <NavBtn route='/editor'>
          <FaCode size={32} color='#6bd1ff' />
          Editor de código
        </NavBtn>
        {!user ? (
          <>
            <NavBtn route='/login'>
              <FaSignInAlt size={32} color='#6bd1ff' />
              Entrar
            </NavBtn>
            <NavBtn route='/register'>
              <IoCreate size={32} color='#6bd1ff' />
              Cadastrar
            </NavBtn>
          </>
        ) : (
          <NavBtn route='/dashboard'>
            <GoGraph size={32} color='#6bd1ff' />
            Dashboard
          </NavBtn>
        )}
        <NavBtn route='/about'>
          <IoInformationCircle size={32} color='#6bd1ff' />
          Sobre o Codeshare
        </NavBtn>
        {user &&
          <>
            <hr />
            <button className='logout' onClick={() => setOpen(true)}>Fazer logout</button>
            <button className='btn close' onClick={handleDelete}>Deletar conta</button>
          </>
        }
        <S.ToastRoot open={open} onOpenChange={setOpen}>
          <S.ToastTitle>Logout com sucesso!</S.ToastTitle>
          <S.ToastDescription>Você fez logout do sistema.</S.ToastDescription>
        </S.ToastRoot>
        <S.ToastViewport />
      </Toast.Provider>
    </S.Menu >
  );
};
