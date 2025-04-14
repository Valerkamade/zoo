import Card from './Card';

export default function Main({
                               onCardClick,
                               onCardLike,
                               onCardDelete,
                               cards,
                             }) {

  return (
    <main className='main'>
      <section className='gallery page__gallery' aria-label='Галерея'>
        <ul className='gallery__list'>
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              key={card.id}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
