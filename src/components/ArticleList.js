import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArticleCard from "./ArticleCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ArticleList() {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8000/api/products");
    const products = await response.json();
    console.log(products["hydra:member"]);
    return products["hydra:member"];
  };
  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products &&
          products.map((product) => {
            return (
              <Grid item xs={3} key={product.id}>
                <ArticleCard product={product} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
