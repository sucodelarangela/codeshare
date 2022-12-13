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
          <Card
            key={card._id}
            color={card.color}
            code={card.code}
            project={card.projectName}
            description={card.description}
            language={card.language}
            author={card.author.name}
          />
        ))}
      </div>
    </section>
  );
};
