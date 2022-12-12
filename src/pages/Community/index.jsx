import MainMenu from 'components/MainMenu';
import useFetch from 'hooks/useFetch';
import Card from './Card';

export const Community = () => {
  const { data: cards, loading, error } = useFetch('http://localhost:8000/codes');
  console.log(cards);

  return (
    <section className='community'>
      <MainMenu />
      <div className='cards'>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!loading && cards && cards.map(card => (
          <Card key={card._id} color={card.color}>
            <p>{card.projectName}</p>
            <p>{card.description}</p>
            <p>{card.code}</p>
            <p>{card.language}</p>
            <p>{card.author.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
