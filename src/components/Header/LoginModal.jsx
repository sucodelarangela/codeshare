import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import { useState } from 'react';

export const LoginModal = styled.section`
    position: absolute;
    background: var(--white);
    width: min(31rem, 90%);
    height: auto;
    padding: 32px;
    border-radius: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    & h2, p, label, input {
      color: var(--dark-blue);
    }
    & h2, p {
      margin-bottom: 16px;
      text-align: center;
    }
    & h2 {
      font-size: 24px;
    }
    & p {
      font-size: 18px;
      &.register {
        font-size: 14px;
        color: var(--light-blue);
        border-bottom: 1px solid var(--white);
        width: fit-content;
        margin: 0 auto 16px;
        cursor: pointer;
        transition: border .3s;
        &:hover {
          border-bottom: 1px solid var(--light-blue);
        }
      }
    }
    & form {
      display: flex;
      flex-direction: column;
      width: 100%;
      & label {
        margin-bottom: 8px;
      }
      & input {
        padding: 8px;
        margin-bottom: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 0 var(--light-blue);
      }
      & button {
        display: inline-block;
        padding: 16px;
        width: fit-content;
        margin: 0 auto;
        border-radius: 4px;
        background: var(--light-blue);
        font-weight: bold;
        &:hover, &:focus {
          opacity: .8;
        }
      }
      & .close {
        background: transparent;
        padding: 12px;
        position: absolute;
        top: 0px;
        right: 0px;
        & svg {
          fill: var(--dark-blue);
        }
      }
    }
`;

// eslint-disable-next-line react/display-name
export default ({ setShowDialog }) => {
  const [register, setRegister] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        setShowDialog(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <>
      <div className='overlay' onClick={() => setShowDialog(false)}></div>
      <LoginModal role='dialog'>
        <h2>Entrar</h2>
        <p>Faça o {register ? 'cadastro' : 'login'} para usar o sistema</p>
        {!register && <p className='register' onClick={() => setRegister(true)}>Ainda não tem cadastro? Clique aqui!</p>}
        <hr />
        <form>
          {register && (
            <>
              <label htmlFor='username'>Nome:</label>
              <input
                id='username'
                type="text"
                name="username"
                placeholder='Insira seu nome'
                required
              />
            </>
          )}
          <label htmlFor='email'>E-mail:</label>
          <input
            id='email'
            type="email"
            name="email"
            placeholder='Insira seu e-mail'
            required
          />
          <label htmlFor='password'>Senha:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder='Insira sua senha'
            required
          />
          {register && (
            <>
              <label htmlFor='confirmPassword'>Senha:</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder='Confirme sua senha'
                required
              />
            </>
          )}
          {register ? <button>Cadastrar</button> : <button>Entrar</button>}
          <button className='close' aria-label='Fechar modal' type='button' onClick={() => setShowDialog(false)}>
            <IoMdClose size={24} />
          </button>
        </form>
      </LoginModal>
    </>
  );
};