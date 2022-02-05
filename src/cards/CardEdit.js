import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Breadcrumbs from '../decks/Breadcrumbs';
import Form from "../Layout/Form";
import { updateCard, readDeck } from "../utils/api";

export default function CardEdit() {
  const {cardId, deckId} = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({front: "", back: ""})
  const [deckInfo, setDeckInfo] = useState({});
  
  

  //inject readDeck function and dependencies

  const readCurrentDeck = useCallback(() => {
    const abortController = new AbortController();
   
    readDeck(deckId)
    .then(response => {
      setDeckInfo(response);
    })
    .catch(error => {
      alert("Something went wrong. Please try again.", error);
    });

    return () => abortController.abort();
  }, [deckId, setDeckInfo]);

  useEffect(() => {
    const abortController = new AbortController();
    readCurrentDeck();
    return () => abortController.abort();

  }, [readCurrentDeck]);

  
  const {name, id, cards = []} = deckInfo
  //for Breadcrumbs use
  const directories = [
    {name, url: `/decks/${id}`},
    {name: `Edit Card ${cardId}`}
  ];
  
  //finds card object 
  const cardInfo = cards.find( card => card.id === parseInt(cardId));

  useEffect(() => {
    setFormData({
      front: cardInfo?.front,
      back: cardInfo?.back
    })
  }, [cardInfo, setFormData])


  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const deckScreenURL = `/decks/${id}`;

  const handleSubmitClick = event => {
    event.preventDefault();
    updateCard(parseInt(cardId), formData)
    .then(response => console.log("card updated to:", response))
    history.push(deckScreenURL);
  };
 
  return (
    <>
      <Breadcrumbs directories={directories}/>
      <Form
        handleSubmit={handleSubmitClick}
        handleChange={handleChange}
        deckId={id}
        firstValue={formData.front}
        secondValue={formData.back}
        title={"Edit Card"}
      />
    </>
  )
}
