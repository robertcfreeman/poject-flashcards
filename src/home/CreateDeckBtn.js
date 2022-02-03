import React from 'react';
import { useHistory } from "react-router-dom";
import "../icons.css";

export default function CreateDeck() {
  const history = useHistory();
  
  return (
    <button
      className="btn btn-secondary mb-4 p-2"
      onClick={() => history.push("/decks/new")}
    >
      <span className="bi bi-plus-circle"> </span>
      Create Deck
    </button>
  )
}
