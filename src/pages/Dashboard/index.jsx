import MainMenu from 'components/MainMenu';
import { useAuthValue } from 'context/AuthContext';
import useFetch from 'hooks/useFetch';
import CodesList from './CodesList';

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

  const { data: posts, error, loading } = useFetch(`/codes/search?author=${userId}`);

  return (
    <section className="dashboard">
      <MainMenu />
      <div className="codelist">
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!loading && posts ? (
          [...posts].reverse().map(post => (
            <CodesList
              key={post._id}
              name={post.projectName}
            />
          ))
        ) : (
          <p>Você não possui códigos cadastrados.</p>
        )}
      </div>
    </section>
  );
};
