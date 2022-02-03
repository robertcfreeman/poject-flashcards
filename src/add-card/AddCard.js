import React, { useState } from 'react';
import Breadcrumbs from "../decks/Breadcrumbs"
import { createCard } from "../utils/api";
import { useHistory } from "react-router-dom";

export default function AddCard({deckInfo}) {
  const history = useHistory();
  
  const initialFormData = {front: "", back: ""}
  const [formData, setFormData] = useState({...initialFormData});
  
  const {name, id} = deckInfo
  //for Breadcrumbs use
  const directories = [
    {name, url: `/decks/${id}`},
    {name: "Add Card"}
  ];

  const handleChange = ({target}) => {
    console.log(target.name, target.value);
    setFormData(prev => ({...prev, [target.name]: target.value}))
  }

  const handleSubmitClick = event => {
    event.preventDefault();
    console.log("Submitted", formData);
    
    createCard(id, formData)
    .then(response => console.log(response));

    setFormData({...initialFormData})
  };

  
  return (
    <>
      <Breadcrumbs directories={directories}/>
      <div className="container d-flex flex-column align-items-">
        <h2>{name}: Add Card</h2>
        <form onSubmit={handleSubmitClick}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea 
              rows="3"
              className="form-control" 
              id="front"
              placeholder="Front side of card"
              value={formData.front}
              onChange={handleChange}
            >
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea 
              rows="3"
              className="form-control" 
              id="back"
              placeholder="Back side of card"
              value={formData.back}
              onChange={handleChange}
            >
            </textarea>
          </div>
          <button 
            onClick={() => history.push(`/decks/${id}`)} 
            className="btn btn-secondary p-2 mr-3"
          >
            Done
          </button>
          <button type="submit" className="btn btn-primary p-2">Save</button>
        </form>
      </div>
    </>
  )
}
