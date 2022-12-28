import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CodesList = styled.div`
  background: transparent;
  border: 1px solid var(--white);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  .actions {
    display: flex;
    gap: 32px;
  }
`;

// eslint-disable-next-line react/display-name
export default ({ name }) => {
  return (
    <CodesList>
      <p>{name}</p>
      <div className='actions'>
        <Link to={''}>Editar</Link>
        <button>Deletar</button>
      </div>
    </CodesList>
  );
};
