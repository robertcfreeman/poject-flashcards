import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Card from "./Card"
import CardEdit from './CardEdit';
import AddCard from "../add-card/AddCard";

export default function Cards({deckInfo, deckId}) {
  const {path} = useRouteMatch();
  
  return (
    <>
      <Switch>
        <Route path={path}>
          <Card deckInfo={deckInfo} deckId={deckId}/>
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddCard />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <CardEdit deckInfo={deckInfo} deckId={deckId}/>
        </Route>
      </Switch>
    </>
  )
}
