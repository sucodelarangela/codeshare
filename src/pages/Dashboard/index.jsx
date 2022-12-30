import MainMenu from 'components/MainMenu';
import { useAuthValue } from 'context/AuthContext';
import useFetch from 'hooks/useFetch';
import CodesList from './CodesList';
import styled from 'styled-components';

const ListHead = styled(CodesList)`
  color: var(--light-blue);
  font-weight: bold;
  text-transform: uppercase;
  & .actions {
    width: 150px;
    justify-content: center;
    text-align: center;
    a, button {
      display: none;
    }
    p {
      display: block;
      width: fit-content;
    }
  }
`;

export const Dashboard = () => {
  const { userId } = useAuthValue();
  console.log(userId);

  const { data: posts, error, loading } = useFetch(`/codes/search?author=${userId}`);

  return (
    <section className="dashboard">
      <MainMenu />
      <div className="codelist">
        <ListHead
          name='Nome do projeto'
          description='Descrição'
          theme='Tema'
          colorName='Cor'
          actions='Ações'
        />
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {posts ? (
          [...posts].reverse().map(post => (
            <CodesList
              key={post._id}
              name={post.projectName}
              description={post.description}
              theme={post.hljs}
              color={post.color}
            />
          ))
        ) : (
          <p>Você não possui códigos cadastrados.</p>
        )}
      </div>
    </section>
  );
};
