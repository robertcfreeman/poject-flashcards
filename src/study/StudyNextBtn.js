import React from 'react';
import { useHistory } from "react-router-dom";

export default function StudyNextBtn({setCardCount, cardSide, cardCount, cards, setCardSide}) {
  
  const history = useHistory();
  
  //Next button will not render unless the back of the card is displayed
  if (cardSide === "front") return null;

 
  
  const handleNextClick = () => {
    
    if (cardCount + 1  === cards.length) {
      const response = window.confirm("Restart cards?\nClick `cancel` to return to the home page.")
      if (response) {
        setCardCount(0);
      } else {
        history.push("/");
      }
    }
    setCardCount(prev => prev + 1);
    setCardSide("front");
    

  }
  
  return (
    <button
      className="btn btn-primary p-2"
      onClick={handleNextClick}
    >
      Next
    </button>
  );
}
