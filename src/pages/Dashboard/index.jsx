import MainMenu from 'components/MainMenu';
import { useAuthValue } from 'context/AuthContext';
import useFetch from 'hooks/useFetch';
import CodesList from './CodesList';
import styled from 'styled-components';
import { api } from 'api/api';
import { useEffect, useState } from 'react';

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
  let { data, error, loading } = useFetch(`/codes/search?author=${userId}`);
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  async function handleDelete(id) {
    try {
      await api.delete(`/codes/${id}`);
      let response = await api.get(`/codes/search?author=${userId}`);
      setPosts(response.data);
    } catch (error) {
      alert(error.message);
    }
  }

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
              postId={post._id}
              handleDelete={() => handleDelete(post._id)}
            />
          ))
        ) : (
          <p>Você não possui códigos cadastrados.</p>
        )}
      </div>
    </section>
  );
};
