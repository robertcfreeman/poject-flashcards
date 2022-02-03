import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';
import { createDeck } from "../utils/api";
import "./CreateDeck.css";

export default function CreateDeck({deckInfo}) {
  const history = useHistory();
  
  const initialFormData = {id: deckInfo.id, name: "", description: ""}
  const [formData, setFormData] = useState({...initialFormData});
  
  const {id} = deckInfo
  //for Breadcrumbs use
  const directories = [
    {name: "Create Deck"}
  ];

  const handleChange = ({target}) => {
    console.log(target.name, target.value);
    setFormData(prev => ({...prev, [target.name]: target.value}))
  }

  const handleSubmitClick = event => {
    event.preventDefault();
    console.log("Submitted", formData);
    
    createDeck(formData)
    .then(response => console.log(response));

    setFormData({...initialFormData})
  };
  
  return (
    <>
      <Breadcrumbs directories={directories} />
      <div className="container d-flex flex-column align-items-">
        <h2>Create Deck</h2>
        <form onSubmit={handleSubmitClick}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name"
              placeholder="Deck Name"
              onChange={handleChange}
              value={formData.name}
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              rows="6"
              className="form-control" 
              id="description"
              placeholder="Brief description of the deck"
              onChange={handleChange}
              value={formData.description}
            >
            </textarea>
          </div>
            <button
              type="button" 
              onClick={() => history.push(`/decks/${id}`)} 
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
