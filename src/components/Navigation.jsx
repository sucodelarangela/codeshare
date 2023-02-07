import { useAuthValue } from 'context/AuthContext';
import { FaCode, FaSignInAlt, FaUsers } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { IoCreate, IoInformationCircle } from 'react-icons/io5';
import { NavBtn } from './NavBtn';

export const Navigation = () => {
  const { user } = useAuthValue();

  return (
    <>
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
    </>
  );
};
