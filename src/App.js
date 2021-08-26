import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeMovie from "./pages/HomeMovie";
import MovieDetail from "./pages/MovieDetail";

function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/detail/:movieId">
            <MovieDetail />
          </Route>
          <Route path="/">
            <HomeMovie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
