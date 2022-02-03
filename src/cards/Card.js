import React from 'react';
import CardsDeleteBtn from './CardDeleteBtn';
import CardEditBtn from './CardEditBtn';

export default function Card({deckInfo, deckId}) {
  
  if (!deckInfo.id) return null
  const cards = deckInfo.cards.map(({front, back, id}, index) => {
    return (
      <li className="border border-light mt-3" key={index}>
        <div className="row justify-content-between m-3">
          <div className="col">
            <p className="text-secondary">{front}</p>
          </div>
          <div className="col">
            <p className="text-secondary">{back}</p>
          </div>
        </div>
        <div className="row justify-content-around justify-content-md-end m-3">
          <div className="col-3">
            <CardEditBtn deckId={deckId} cardId={id}/>
          </div>
          <div className="col-3">
            <CardsDeleteBtn cardId={id} deckId={deckId} />
          </div>
        </div>
      </li>
    )
  });


  return (
    <>
      <div className="justify-content-start">
        <div className="col">
          <h2>Cards</h2>
        </div>
      </div>
      <ul className="container" style={{width: "80vw"}}>
        {cards}
      </ul>
    </>
  );
};

