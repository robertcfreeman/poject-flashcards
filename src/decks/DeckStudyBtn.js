import React from 'react';
import { useHistory } from "react-router-dom";
import "../icons.css";

export default function DeckStudyBtn({deckId}) {
  const history = useHistory();
  
  return (
    <button
      className="btn btn-primary p-2"
      onClick={() => history.push(`/decks/${deckId}/study`)}
    >
      <span className="bi bi-book-half"> </span>
      Study
    </button>
  );
}
