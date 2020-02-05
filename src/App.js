import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MineSweeper from "./Projects/mine_sweeper";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/minesweeper" exact render={() => <MineSweeper />} />
        <Route path="/" render={() => <HomePage />} />
      </Switch>
    </Router>
  );
}
