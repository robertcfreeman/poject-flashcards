import React from 'react';
import { deleteCard, readDeck } from "../utils/api";
import "../icons.css";

export default function CardDeleteBtn({cardId, deckId}) {
  
  const handleDeleteClick = async () => {
    try {
      if (window.confirm(
          "Delete this card?\nYou will not be able to recover it."
          )) {
           await deleteCard(cardId);
           readDeck(deckId);
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
