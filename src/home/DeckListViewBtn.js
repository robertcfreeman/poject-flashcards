import React from 'react';
import { useHistory } from "react-router-dom";
import "../icons.css";

export default function DeckListViewBtn({deckId}) {
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary p-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      <span className=" bi bi-eye-fill"> </span>
      View
    </button>
  )
}
