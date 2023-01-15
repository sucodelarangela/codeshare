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
  const { user } = useAuthValue();
  let userId;
  const { data: authors } = useFetch('/authors');

  if (user) {
    authors.forEach(author => {
      if (author.name === user.displayName) {
        userId = author._id;
      }
    });
  }

  const [posts, setPosts] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        let data = await api.get(`/codes/search?author=${userId}`)
          .then(res => res.data);
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }

    getData();
  }, [userId]);

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
        {!loading && posts && posts.length > 0 ? (
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
