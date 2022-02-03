import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import DeckAddCardsBtn from './DeckAddCardsBtn';
import DeckDeleteBtn from './DeckDeleteBtn';
import DeckEditBtn from './DeckEditBtn';
import DeckStudyBtn from './DeckStudyBtn';


export default function Deck({deckInfo, deckId}) {
  
  const {name, description} = deckInfo;
  
  const directories = [
    {name}
  ];
 
  return (
    <>
      <Breadcrumbs directories={directories} />
      <div className="container" style={{width: "80vw"}}>
        <div className="row">
          <div className="col">
            <h3>{name}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-secondary">{description}</p>
          </div>
        </div>
        <div className="row justify-content-md-start justify-content-between">
          <div className="col-3 col-md-2">
            <DeckEditBtn deckId={deckId}/>
          </div>
          <div className="col-3 col-md-2">
            <DeckStudyBtn deckId={deckId} />
          </div>
          <div className="col-3 col-md-6">
            <DeckAddCardsBtn deckId={deckId} />
          </div>
          <div className="col-3 col-md-2">
            <DeckDeleteBtn />
          </div>
        </div>
      </div>
    </>
  );
}
