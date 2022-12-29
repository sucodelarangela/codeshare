import MainMenu from 'components/MainMenu';
import { useAuthValue } from 'context/AuthContext';
import useFetch from 'hooks/useFetch';
import CodesList from './CodesList';

export const Dashboard = () => {
  const { userId } = useAuthValue();
  console.log(userId);

  const { data: posts, error, loading } = useFetch(`/codes/search?author=${userId}`);

  return (
    <section className="dashboard">
      <MainMenu />
      <div className="codelist">
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
