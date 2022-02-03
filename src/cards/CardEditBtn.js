import React from 'react';
import { useHistory } from "react-router-dom";
import "../icons.css";


export default function CardEditBtn({deckId, cardId}) {
  const history = useHistory();
  
  return (
    <button
      className="btn btn-secondary"
      onClick={() => history.push(`/decks/${deckId}/cards/${cardId}/edit`)}
      
    >
      <span className=" bi bi-pencil-square"> </span>
      Edit
    </button>
  )
}
