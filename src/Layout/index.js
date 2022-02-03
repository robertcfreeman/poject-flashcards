import React, { useState } from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeckBtn from "../home/CreateDeckBtn";
import DeckList from "../home/DeckList";
import Decks from "../decks/Decks";

function Layout() {
  const [deckAndCards, setDeckAndCards] = useState([])

  return (
    <>
      <Header /> 
        <Switch>
          <Route exact path="/">
            <div className="container">
              <div className="row">
                <div className="col">
                  <CreateDeckBtn />
                </div>
              </div>
              <div className="row">
                <DeckList 
                  deckAndCards={deckAndCards} 
                  setDeckAndCards={setDeckAndCards}
                />
              </div>
            </div>
          </Route>
          <Route path="/decks/:deckId">
            <Decks setDeckAndCards={setDeckAndCards}/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
    </>
  );
}

export default Layout;
