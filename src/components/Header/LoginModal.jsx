/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { api } from 'api/api';

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
    z-index: 10;
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
      &.error {
        color: var(--dark-red);
        background-color: var(--light-red);
        border: 1px solid var(--red-border);
        padding: 5px;
        border-radius: 4px;
        margin-top: 16px;
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
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState(''); // this is a front end error

  const { login, createUser, error: authError, loading, user } = useAuth();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        setShowDialog(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      displayName,
      email,
      password,
      photoURL
    };
    if (password != confirmPassword) {
      setError('As senhas precisam ser iguais');
      return;
    }
    const res = await createUser(user);
    api.post('/authors', { name: displayName, photoURL: photoURL, uid: user.uid });
    setShowDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password
    };
    const res = await login(user);
    if (!authError) setShowDialog(false);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
      <div className='overlay' onClick={() => setShowDialog(false)}></div>
      <LoginModal role='dialog'>
        <h2>Entrar</h2>
        <p>Faça o {register ? 'cadastro' : 'login'} para usar o sistema</p>
        {!register && <p className='register' onClick={() => setRegister(true)}>Ainda não tem cadastro? Clique aqui!</p>}
        <hr />
        <form onSubmit={register ? handleRegister : handleSubmit}>
          {register && (
            <>
              <label htmlFor='displayName'>Nome ou apelido:</label>
              <input
                id='displayName'
                type="text"
                name="displayName"
                placeholder='Insira seu nome'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor='password'>Senha:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder='Insira sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {register && (
            <>
              <label htmlFor='confirmPassword'>Confirmar senha:</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder='Confirme sua senha'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label htmlFor='photoURL'>Foto de usuário:</label>
              <input
                id="photoURL"
                type="text"
                name="photoURL"
                placeholder='Insira uma URL'
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </>
          )}
          {register && loading ? <button type='submit' disabled>Cadastrar</button> : register && !loading ? <button type='submit'>Cadastrar</button> : <button type='submit'>Entrar</button>}
          {error && <p className='error'>{error}</p>}
          <button className='close' aria-label='Fechar modal' type='button' onClick={() => setShowDialog(false)}>
            <IoMdClose size={24} />
          </button>
        </form>
      </LoginModal>
    </>
  );
};