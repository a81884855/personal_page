import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MineSweeper from "./Projects/mine_sweeper";
import SpaceX from "./Projects/space-x";

export default function App() {
  console.log(process.env.spaceXendPoint);
  return (
    <Router>
      <Switch>
        <Route path="/minesweeper" exact render={() => <MineSweeper />} />
        <Route path="/space-x" render={() => <SpaceX />} />
        <Route path="/" render={() => <HomePage />} />
      </Switch>
    </Router>
  );
}
