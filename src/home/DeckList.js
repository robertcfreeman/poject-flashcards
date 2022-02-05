import React, { useEffect, useCallback } from 'react';
import { listDecks } from "../utils/api";
import DeckListDeleteBtn from "./DeckListDeleteBtn";
import DeckListViewBtn from "./DeckListViewBtn";
import DeckListStudyBtn from './DeckListStudyBtn';
import "./DeckList.css"

export default function DeckList({deckAndCards, setDeckAndCards}) {
 
 
  const loadDecks = useCallback(() => {
    const abortController = new AbortController();
    try {
      listDecks(abortController.signal)
      .then(response => setDeckAndCards(response));
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Aborted");
      } else {
        throw error;
      };
    };
    return abortController;
  }, [setDeckAndCards])

   useEffect(() => {
    
    const abortController = loadDecks();
    return () => abortController.abort();
  }, [loadDecks]);


  const decks = deckAndCards.map(({name, description, cards, id}, index) => {
    return (
      <li className="border border-light rounded" key={index}>
        <div className="row mb-3 mt-3 m-2">
          <div className="col-10">
            <h4>{name}</h4>
          </div>
          <div className="col-2">
            <span className="text-secondary">{cards.length} cards</span>
          </div>
        </div>
        <div className="row mb-3 m-2">
          <div className="col">
          <p className="text-secondary">{description}</p>
          </div>
        </div>
          <div className="row d-flex justify-content-md-start m-2 mb-3 justify-content-between">
            <div className="col-2">
              <DeckListViewBtn deckId={id}/>
            </div>
            <div className="col-2 col-md-8">
              <DeckListStudyBtn deckId={id}/>
            </div>
            <div className="col-2">
              <DeckListDeleteBtn deckId={id} loadDecks={loadDecks}/>
            </div>
          </div>
      </li>
    );
  });


  return (
    <ul className="container d-flex flex-column">
      {decks}
    </ul>
  )
}
