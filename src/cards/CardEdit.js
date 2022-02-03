import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Breadcrumbs from '../decks/Breadcrumbs';
import { updateCard } from "../utils/api";

export default function CardEdit({deckInfo}) {
  const {cardId} = useParams();
  const history = useHistory();
  
  const initialFormData = {front: "", back: ""}
  const [formData, setFormData] = useState({...initialFormData})


  const {name, id, cards = []} = deckInfo
  //for Breadcrumbs use
  const directories = [
    {name, url: `/decks/${id}`},
    {name: `Edit Card ${cardId}`}
  ];
  
  //finds card object 
  const cardInfo = cards.find(({id})=> id === parseInt(cardId));

  const handleOnChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const deckScreenURL = `/decks/${id}`;

  const handleSubmit = event => {
    event.preventDefault();
    updateCard(parseInt(cardId), formData)
    .then(response => console.log("card updated to:", response))
    history.push(deckScreenURL);
  };
 
  return (
    <>
      <Breadcrumbs directories={directories}/>
      <div className="container d-flex flex-column align-items-">
        <h2>Edit Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea 
              rows="3"
              className="form-control" 
              id="front"
              placeholder={cardInfo?.front}
              onChange={handleOnChange}
              value={formData.front}
            >
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea 
              rows="3"
              className="form-control" 
              id="back"
              placeholder={cardInfo?.back}
              onChange={handleOnChange}
              value={formData.back}
            >
            </textarea>
          </div>
          <button 
            type="button"
            onClick={() => history.push(deckScreenURL)} 
            className="btn btn-secondary p-2 mr-3"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary p-2">Save</button>
        </form>
      </div>
    </>
  )
}
