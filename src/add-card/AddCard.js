import React, { useState } from 'react';
import Breadcrumbs from "../decks/Breadcrumbs"
import Form from "../Layout/Form";
import { createCard } from "../utils/api";

export default function AddCard({deckInfo}) {
  
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
      <Form
        handleSubmit={handleSubmitClick}
        handleChange={handleChange}
        deckId={id}
        firstValue={formData?.front}
        secondValue={formData?.back}
        title={`${name}: Add Card`}
      />
    </>
  )
}
