import { Container } from "@material-ui/core";
import React from "react";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <ArticleList />
      </Container>
    </>
  );
}
