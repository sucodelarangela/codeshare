import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth.js';
import * as Toast from '@radix-ui/react-toast';
import styled from 'styled-components';
import { useState } from 'react';
import { api } from 'api/api';
import { useAuthValue } from 'context/AuthContext';
import { NavBtn } from 'components/NavBtn';
import editorIcon from 'assets/editor_icon.svg';
import commIcon from 'assets/comm_icon.svg';

const Menu = styled.div`
  background: var(--white);
  width: fit-content;
  padding: 16px;
  border-radius: 8px;
  position: absolute;
  right: 32px;
  top: 100px;
  z-index: 10;
  a {
    display: flex;
    color: var(--dark-blue);
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;
    gap: 5px;
  }
  hr {
    border: 1px solid var(--light-blue);
    margin-bottom: 16px;
  }
  button {
    display: block;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    transition: .3s;
  }
  .close {
    margin-top: 8px;
    color: var(--dark-red);
    background-color: var(--light-red);
    border: 1px solid var(--red-border);
    &:hover {
      background-color: var(--red-border);
    }
  }
  .logout {
    color: var(--dark-blue);
    border: 1px solid #d0d0d7;
  }
`;

const ToastViewport = styled(Toast.Viewport)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

const ToastRoot = styled(Toast.Root)`
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;
  &[data-state='open'] {
    animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state='closed'] {
    animation: hide 100ms ease-in;
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(calc(0% - 25px));
    }
    to {
      transform: translateX(0);
    }
  }
`;

const ToastTitle = styled(Toast.Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: var(--dark-blue);
  font-size: 16px;
`;

const ToastDescription = styled(Toast.Description)`
  grid-area: description;
  margin: 0;
  color: var(--dark-blue);
  font-size: 14px;
  line-height: 1.3;
`;

// eslint-disable-next-line react/display-name
export default ({ setShowMenu, setShowDialog }) => {
  const [open, setOpen] = useState(false);
  const { logout, deleteAccount } = useAuth();
  const { user } = useAuthValue();

  async function handleDelete() {
    let id;
    await api.get('/authors')
      .then(res => {
        res.data.forEach(author => {
          if (author.name === user.displayName) {
            id = author._id;
          }
        });
      });
    await api.delete(`/authors/${id}`);
    await api.delete(`/codes/byauthor/${id}`);
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
    <Menu>
      <Toast.Provider swipeDirection='left' duration={2000}>
        <NavBtn className='navlink' route='/' src={editorIcon} style={{ display: 'block' }}>Editor de código</NavBtn>
        <NavBtn className='navlink' route='/community' src={commIcon}>Comunidade</NavBtn>
        <hr />
        {user ?
          <button className='logout' onClick={() => setOpen(true)}>Fazer logout</button>
          :
          <button className='logout' onClick={() => { setShowDialog(true); setShowMenu(false); }}>Fazer login</button>
        }
        <button className='btn close' onClick={handleDelete}>Deletar conta</button>
        <ToastRoot open={open} onOpenChange={setOpen}>
          <ToastTitle>Logout com sucesso!</ToastTitle>
          <ToastDescription>Você fez logout do sistema.</ToastDescription>
        </ToastRoot>
        <ToastViewport />
      </Toast.Provider>
    </Menu >
  );
};
