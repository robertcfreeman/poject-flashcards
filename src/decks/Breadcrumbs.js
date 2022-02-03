import React from 'react';
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";
import "../icons.css"

export default function Breadcrumbs({directories}) {
 


  const breadcrumbsList = directories.map((directory, index) => {
    if (directory.url) {
      return (
       <li 
          key={index}
          className="breadcrumb-item"
        >
          <Link to={directory.url}><span> </span> {directory.name}</Link>
        </li>
      )
    } else {
      return <li key={index} className="breadcrumb-item active">{directory.name}</li>;
    }
  })
  
  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
        <Link to="/"><span className="bi bi-house"> </span>Home</Link>
        </li>
        {breadcrumbsList}
      </ol>
    </nav>
  );
}
