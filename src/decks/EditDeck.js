import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { updateDeck } from "../utils/api";

export default function EditDeck({deckInfo}) {
  const history = useHistory();
  
  const initialFormData = {id: deckInfo.id, name: "", description: ""}
  const [formData, setFormData] = useState({...initialFormData});
  
  const {name, id, description} = deckInfo
  //for Breadcrumbs use
  const directories = [
    {name, url: `/decks/${id}`},
    {name: "Edit Deck"}
  ];

  const handleChange = ({target}) => {
    console.log(target.name, target.value);
    setFormData(prev => ({...prev, [target.name]: target.value}))
  }

  const handleSubmitClick = event => {
    event.preventDefault();
    console.log("Submitted", formData);
    
    updateDeck(formData)
    .then(response => console.log(response));

    setFormData({...initialFormData})
  };

  
  
  
  return (
    <>
      <Breadcrumbs directories={directories}/>
      <div className="container d-flex flex-column align-items-">
        <h2>Edit Deck</h2>
        <form onSubmit={handleSubmitClick}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              className="form-control" 
              id="name"
              placeholder={name}
              value={formData.name}
              onChange={handleChange}
            >
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              rows="4"
              className="form-control" 
              id="description"
              placeholder={description}
              value={formData.description}
              onChange={handleChange}
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
