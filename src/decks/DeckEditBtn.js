import React from 'react';
import { useHistory } from "react-router-dom";
import "../icons.css";

export default function DeckEditBtn({deckId}) {
  const history = useHistory();
  
  return (
    <button
      className="btn btn-secondary p-2"
      onClick={() => history.push(`/decks/${deckId}/edit`)}
    >
      <span className="bi bi-pencil-square"> </span>
      Edit
    </button>
  );
}
