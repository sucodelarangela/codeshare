import MainMenu from 'components/MainMenu';
import useFetch from 'hooks/useFetch';
import Card from './Card';
import Masonry from '@mui/lab/Masonry';

export const Community = () => {
  const { data: cards, loading, error } = useFetch('/codes');

  return (
    <section className='community'>
      <MainMenu />
      <div className='cards'>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        <Masonry columns={{ 768: 1, lg: 2 }} spacing={4} classes={{ width: '50%' }}>
          {!loading && cards && cards.map(card => (
            <Card
              key={card._id}
              color={card.color}
              code={card.code}
              project={card.projectName}
              description={card.description}
              language={card.language}
              highlight={card.hljs}
              author={card.author.name}
              photo={card.author.photoURL}
            />
          ))}
        </Masonry>
      </div>
    </section >
  );
};
