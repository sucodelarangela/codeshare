import * as S from 'styles/Menu';
import * as Toast from '@radix-ui/react-toast';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth.js';
import { useState } from 'react';
import { useAuthValue } from 'context/AuthContext';
import { Navigation } from 'components/Navigation';

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
        <Navigation />
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
