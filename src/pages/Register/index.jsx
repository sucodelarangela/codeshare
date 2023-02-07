import * as S from 'styles/LoginForm';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { api } from 'api/api';
import { Input } from 'components/Input';
import { MainMenu } from 'components/MainMenu';

export const Register = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(''); // this is a front end error
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [inputType2, setInputType2] = useState('password');
  const { createUser, error: authError, loading } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    const user = { displayName, email, password, photoURL };
    if (password != confirmPassword) {
      setError('As senhas precisam ser iguais');
      passRef.current.focus();
      return;
    }
    await createUser(user).then((res) => {
      api.post('/authors', {
        name: displayName,
        photoURL: photoURL,
        uid: res.uid,
      });
    });
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
      if (authError.includes('Usuário') || authError.includes('E-mail')) emailRef.current.focus();
      if (authError.includes('Senha')) passRef.current.focus();
    }
  }, [authError]);

  return (
    <section className="dashboard">
      <MainMenu />
      <div className="codelist">
        <S.LoginForm>
          <h2>Faça o cadastro para usar o sistema</h2>
          <p>
            Já tem cadastro?{' '}
            <Link to='/login' className='register'>Faça seu login!</Link>
          </p>
          <form onSubmit={handleRegister}>
            {error && <p className='error'>{error}</p>}
            <Input
              label='Nome ou apelido:'
              id='displayName'
              type='text'
              placeholder='Insira seu nome'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
            <Input
              label='E-mail:'
              id='email'
              type='email'
              placeholder='Insira seu e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              required
            />
            <div>
              {inputType === 'password' ? (
                <S.EyeLine onClick={() => setInputType('text')} />
              ) : (
                <S.EyeOffFill onClick={() => setInputType('password')} />
              )}
            </div>
            <Input
              label='Senha:'
              id='password'
              type={inputType}
              placeholder='Insira sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passRef}
              required
            />
            <div>
              {inputType2 === 'password' ? (
                <S.EyeLine onClick={() => setInputType2('text')} />
              ) : (
                <S.EyeOffFill onClick={() => setInputType2('password')} />
              )}
            </div>
            <Input
              label='Confirmar senha:'
              id='confirmPassword'
              type={inputType2}
              placeholder='Confirme sua senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Input
              label='Foto de usuário:'
              id='photoURL'
              type='text'
              placeholder='Insira uma URL'
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required={false}
            />
            {loading ? (
              <button type='submit' disabled>Aguarde</button>
            ) : (
              <button type='submit'>Cadastrar</button>
            )}
          </form>
        </S.LoginForm>
      </div>
    </section>
  );
};
