import React, { useState, useCallback, useEffect}from 'react';
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import Cards from '../cards/Cards';
import CreateDeck from './CreateDeck';
import Deck from "./Deck";
import { readDeck } from "../utils/api";
import Study from "../study/Study";
import AddCards from "../add-card/AddCard";
import CardEdit from "../cards/CardEdit";
import EditDeck from "./EditDeck";




export default function Decks() {
  const [deckInfo, setDeckInfo] = useState({});
  const {deckId} = useParams();
  const {url} = useRouteMatch();

  const readCurrentDeck = useCallback(() => {
    const abortController = new AbortController();
    //prevent readCurrentDeck from throwing an error when navigating to the CreateDeck screen
    if (url === "/decks/new") return null
    readDeck(deckId)
    .then(response => {
      setDeckInfo(response);
    })
    .catch(error => {
      alert("Something went wrong. Please try again.", error);
    });

    return () => abortController.abort();
  }, [deckId, setDeckInfo, url]);

  useEffect(() => {
    const abortController = new AbortController();
    readCurrentDeck();
    return () => abortController.abort();

  }, [readCurrentDeck]);


  return (
    <div className="container">
      {/* <Breadcrumbs deckInfo={deckInfo} deckId={deckId} /> */}
      <Switch>
        <Route exact path="/decks/new">
          <CreateDeck deckInfo={deckInfo}/>
        </Route>
        <Route exact path="/decks/:deckId">
          <div className="row mb-5">
            <div className="col">
              <Deck 
                deckInfo={deckInfo} 
                setDeckInfo={setDeckInfo} 
                deckId={deckId}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Cards 
                deckInfo={deckInfo}
                deckId={deckId}
              />
            </div>
          </div>
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck deckInfo={deckInfo}/>
        </Route>
        <Route exact path="/decks/:deckId/study">
          <Study deckInfo={deckInfo} />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <AddCards deckInfo={deckInfo}/>
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <CardEdit deckInfo={deckInfo}/>
        </Route>
      </Switch>
    </div>
  );
}
