import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { updateDeck, readDeck } from "../utils/api";

export default function EditDeck() {
  const history = useHistory();
  const {deckId} = useParams();
  const [deckInfo, setDeckInfo] = useState({});
  const [formData, setFormData] = useState({id: "", name: "", description: ""});
  
  

  //inject readDeck function and dependencies

  const readCurrentDeck = useCallback(() => {
    const abortController = new AbortController();
   
    readDeck(deckId)
    .then(response => {
      setDeckInfo(response);
      setFormData({
        id: response.id,
        name: response.name,
        description: response.description
      })
    })
    .catch(error => {
      alert("Something went wrong. Please try again.", error);
    });

    return () => abortController.abort();
  }, [deckId, setDeckInfo, setFormData]);

  useEffect(() => {
    const abortController = new AbortController();
    readCurrentDeck();
    return () => abortController.abort();

  }, [readCurrentDeck]);

  //end edit code

  const {id, name} = deckInfo
  
  
  
  //for Breadcrumbs use
  const directories = [
    {name, url: `/decks/${id}`},
    {name: "Edit Deck"}
  ];
  
  

  const handleChange = ({target}) => {
    console.log("tName", target.name,"tValue", target.value);
    setFormData({...formData, [target.name]: target.value})
  }

  const handleSubmitClick = event => {
    event.preventDefault();
    console.log("Submitted", formData);
    
    updateDeck(formData)
    .then(response => console.log(response));

    setFormData({});
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
              // placeholder={name}
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
              // placeholder={description}
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
