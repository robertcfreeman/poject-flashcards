import React from 'react';
import { useHistory } from "react-router-dom";

export default function Form({
  handleSubmitClick, 
  handleChange, 
  deckId, 
  firstValue, 
  secondValue,
  title,
}) {
  const history = useHistory();

  return (
    <div className="container d-flex flex-column align-items-">
        <h2>{title}</h2>
        <form onSubmit={handleSubmitClick}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea 
              rows="3"
              className="form-control" 
              id="front"
              placeholder={firstValue}
              value={firstValue}
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
              placeholder={secondValue}
              value={secondValue}
              onChange={handleChange}
            >
            </textarea>
          </div>
          <button
            type="button" 
            onClick={() => history.push(`/decks/${deckId}`)} 
            className="btn btn-secondary p-2 mr-3"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary p-2">Save</button>
        </form>
      </div>
  );
}
