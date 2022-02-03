import React from 'react';
import { deleteDeck } from "../utils/api";
import "../icons.css";

export default function DeckListDeleteBtn({deckId, loadDecks}) {
  const handleDeleteClick = async () => {
    try {
      if (window.confirm(
          "Delete this deck?\nYou will not be able to recover it."
          )) {
           await deleteDeck(deckId);
           loadDecks();
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    }
  };

  return (
    <div>
      <button
      className="btn btn-danger p-2 px-4"
      onClick={handleDeleteClick}
      >
        <span className="bi bi-trash-fill"></span>
      </button>
    </div>
  );
}
