/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { api } from 'api/api';
import { useAuthValue } from 'context/AuthContext';
import { Link, useLocation } from 'react-router-dom';

export const LoginModal = styled.section`
  /* position: absolute; */
  /* background: var(--white); */
  /* margin: 0 auto; */
  /* height: auto; */
  padding: 32px;
  border-radius: 8px;
  /* left: 50%;
  top: 50%; */
  /* transform: translate(-50%, -50%); */
  /* z-index: 11; */
  /* & h2, p, label, input {
    color: var(--dark-blue);
  } */
  & h2, p {
    text-align: center;
    margin-bottom: 16px;
  }
  & h2 {
    font-size: 24px;
  }
  & p {
    font-size: 18px;
    &:nth-child(3) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
  & .register {
    font-size: 16px;
    color: var(--light-blue);
    border-bottom: 1px solid var(--black);
    width: fit-content;
    margin: 0 auto 16px;
    cursor: pointer;
    transition: border .3s;
    &:hover {
      border-bottom: 1px solid var(--light-blue);
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
    max-width: 800px;
    margin: 0 auto;
    & label {
      margin-bottom: 8px;
    }
    & input {
      background: var(--input);
      padding: 8px;
      margin-bottom: 24px;
      border-radius: 4px;
      box-shadow: 0 2px 0 var(--light-blue);
      transition: .3s;
      &:hover, &:focus {
        background: var(--input-hover);
      }
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
    /* & .close {
      background: transparent;
      padding: 12px;
      position: absolute;
      top: 0px;
      right: 0px;
      & svg {
        fill: var(--dark-blue);
      }
    } */
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
  const { login, createUser, error: authError, loading } = useAuth();
  const { user } = useAuthValue();
  const { pathname } = useLocation();

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
    await createUser(user).then(res => {
      api.post('/authors', { name: displayName, photoURL: photoURL, uid: res.uid });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password
    };
    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
    if (user) {
      setShowDialog(false);
    }
  }, [authError, user]);

  return (
    <>
      {/* <div className='overlay' onClick={() => setShowDialog(false)}></div> */}
      <LoginModal role='dialog'>
        <h2>Entrar</h2>
        <p>Faça o {pathname === '/login' ? 'cadastro' : 'login'} para usar o sistema</p>
        {pathname === '/login' ? (
          <p>Ainda não tem cadastro? <Link to='/register' className='register'>Clique aqui!</Link></p>
        ) : (
          <p className='register' onClick={() => setRegister(false)}>Já tem cadastro? Faça seu login!</p>
        )}
        <hr />
        <form onSubmit={pathname === '/register' ? handleRegister : handleSubmit}>
          {pathname === '/register' && (
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
          {pathname === '/register' && (
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
          {pathname === '/register' && loading ? <button type='submit' disabled>Cadastrar</button> : pathname === '/register' && !loading ? <button type='submit'>Cadastrar</button> : <button type='submit'>Entrar</button>}
          {error && <p className='error'>{error}</p>}
          {/* <button className='close' aria-label='Fechar modal' type='button' onClick={() => setShowDialog(false)}>
            <IoMdClose size={24} />
          </button> */}
        </form>
      </LoginModal>
    </>
  );
};