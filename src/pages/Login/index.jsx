import * as S from 'styles/LoginForm';
import { useRef, useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { Input } from 'components/Input';
import { MainMenu } from 'components/MainMenu';

export const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(''); // this is a front end error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password,
    };
    const res = await login(user);
    return res;
  };

  return (
    <section className="dashboard">
      <MainMenu />
      <div className="codelist">
        <S.LoginForm>
          <h2>Faça o login para usar o sistema</h2>
          <p>
            Ainda não tem cadastro?{' '}
            <Link to='/register' className='register'>
              Clique aqui!
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
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
            <label htmlFor='password'>Senha:</label>
            <input
              id='password'
              type={inputType}
              name='password'
              placeholder='Insira sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passRef}
              required
            />
            <button type='submit'>Entrar</button>
          </form>
        </S.LoginForm>
      </div>
    </section>
  );
};
