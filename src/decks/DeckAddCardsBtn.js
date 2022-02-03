import React from 'react';
import { useHistory } from "react-router-dom";
import "../icons.css";

export default function DeckAddCardsBtn({deckId}) {
  const history = useHistory();
  
  return (
    <button
      className="btn btn-primary p-2"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      <span className="bi bi-plus-circle"> </span>
      Add Cards
    </button>
  );
}
