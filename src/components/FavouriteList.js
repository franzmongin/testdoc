import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Article from "./Article";
import Loader from "./Loader";

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

export default function FavouriteList() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchFavourite = async () => {
    const response = await fetch(
      "http://localhost:8000/api/products?isLiked=1",
      {
        method: "get",
        headers: { Accept: "application/json" },
      }
    );
    const products = await response.json();
    return products;
  };
  useEffect(() => {
    fetchFavourite().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isLoading === true && <Loader />}
      <Grid container spacing={3}>
        {products &&
          products.map((product) => {
            if(product.isLiked === true){
            return (
              <Grid item xs={3} key={product.id}>
                <Article
                  product={product}
                  setProducts={setProducts}
                  products={products}
                />
              </Grid>
            );
          }
          else{
            return '';
          }
          })}
      </Grid>
    </div>
  );
}
