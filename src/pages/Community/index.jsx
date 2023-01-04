import MainMenu from 'components/MainMenu';
import useFetch from 'hooks/useFetch';
import Card from './Card';
import Masonry from '@mui/lab/Masonry';
import { useSearchValue } from 'context/SearchContext';

export const Community = () => {
  const { data: cards, loading, error } = useFetch('/codes');
  const { query } = useSearchValue();

  const filteredCards = cards.filter(card => {
    const cardCodes = card.code.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    return cardCodes.includes(normalizedQuery) || card.language.includes(normalizedQuery);
  });

  return (
    <section className='community'>
      <MainMenu />
      <div className='cards'>
        {loading ? <p>Carregando...</p> : ''}
        {error && <p>{error}</p>}
        <Masonry columns={{ 768: 1, lg: 2 }} spacing={4} classes={{ width: '50%' }}>
          {!loading && !error ?
            filteredCards.length > 0 ? (
              filteredCards.reverse().map(card => (
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
              ))) : (
              <p>Sua busca não retornou resultados.</p>
            ) : ''}
        </Masonry>
      </div>
    </section >
  );
};
