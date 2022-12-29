import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CodesList = styled.div`
  background: transparent;
  border-bottom: 1px solid var(--light-blue);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  & p:first-of-type {
    display: block;
    font-weight: bold;
    text-transform: uppercase;
    @media screen and (min-width: 1000px) {
      width: 20%;
    }
  }
  & p {
    display: none;
    width: 50%;
    @media screen and (min-width: 1280px) {
      display: block;
      width: 20%;
    }
    &:nth-of-type(2) {
      @media screen and (min-width: 1000px) {
        display: block;
        width: 20%;
      }
    }
  }
  & span {
    width: 24px;
    height: 24px;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  .actions {
    display: flex;
    gap: 16px;
    button, a {
      padding: unset;
      padding: 4px;
      margin: unset;
      border-radius: 4px;
    }
  }
`;

// eslint-disable-next-line react/display-name
export default ({ name, description, theme, color }) => {
  return (
    <CodesList>
      <p>{name}</p>
      <p>
        {description.length > 20 ? `${description.substring(0, 20)}...` : description}
      </p>
      <p>Tema: {theme}</p>
      <span style={{ background: color }}></span>
      <div className='actions'>
        <Link to={''} className='logout'>Editar</Link>
        <button className='close'>Deletar</button>
      </div>
    </CodesList>
  );
};
