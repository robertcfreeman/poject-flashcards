import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";
import "../icons.css";

export default function DeckDeleteBtn() {
  const {deckId} = useParams();
  const history = useHistory();
  
  const handleDeleteClick = async () => {
    try {
      if (window.confirm(
          "Delete this deck?\nYou will not be able to recover it."
          )) {
           await deleteDeck(deckId);
           history.go(0);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    }
  };
  
  return (
    <button
      className="btn btn-danger p-2 px-4"
      onClick={handleDeleteClick}
    >
      <span className="bi bi-trash-fill"></span>
    </button>
  );
}
