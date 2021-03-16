import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import FavouriteList from "./components/FavouriteList";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <ArticleList />
            </Route>
            <Route exact path="/favourite">
              <FavouriteList />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}
