import React, { useState } from 'react';
import Breadcrumbs from '../decks/Breadcrumbs';
import StudyAddCardsBtn from './StudyAddCardsBtn';
import StudyFlipBtn from "./StudyFlipBtn";
import StudyNextBtn from "./StudyNextBtn";

export default function Study({deckInfo}) {
  const [cardSide, setCardSide] = useState("front");
  const [cardCount, setCardCount] = useState(0);

  const {name, cards = [], id} = deckInfo;
  console.log(name, cards);

  //for Breadcrumbs use
  const directories = [
    {name, url: `/decks/${id}`},
    {name: "Study"}
  ];

  const needsCards = (
    <>
      <h3>Not enough cards.</h3>
      <p>You need at least 3 cards to study. There are {cards.length} in this deck.</p>
      <StudyAddCardsBtn deckId={id} />
    </>
  );


  const cardsToStudy = (
    <>
      <div className="row">
        <div className="col">
          <h5>Card {cardCount + 1} of {cards.length}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{cards[cardCount] ? cards[cardCount][cardSide] : null}</p>
        </div>
      </div>
       <div className="row">
      <div className="col">
        <StudyFlipBtn setCardSide={setCardSide} />
      </div>
        <StudyNextBtn 
          setCardCount={setCardCount} 
          cardSide={cardSide}
          cardCount={cardCount}
          cards={cards}
          setCardSide={setCardSide}
        />
      </div>
    </>
  );
  
  return (
    <div className="container">
      <Breadcrumbs directories={directories}/>
      <div className="row my-4">
        <div className="col">
          <h2>Study: {name}</h2>
        </div>
      </div>
        <div className="border border-light rounded p-4">
        {cards.length < 3 ? needsCards : cardsToStudy}
      </div>
    </div>
  );
}
