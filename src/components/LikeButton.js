import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

function LikeButton({ id, isLiked, setProducts, products }) {
  const [isActive, setisActive] = useState(isLiked);
  const currentProductIndex = products.findIndex(
    (product) => product.id === id
  );
  const updateProduct = async () => {
    try{
    const response = await fetch(`http://localhost:8000/api/products/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/merge-patch+json" },
      body: JSON.stringify({ isLiked: !isActive }),
    });
    return await response.json();
  }catch (err) {
    console.log(err);
  }
  };
  const handleClick = () => {
    updateProduct();
    var newArray = [...products];
    newArray[currentProductIndex][isLiked] = !isActive;
    setProducts(newArray);
    setisActive(!isActive);
  };
  return (
    <>
      <FavoriteIcon
        onClick={() => handleClick()}
        color={isActive ? "primary" : "disabled"}
      />
    </>
  );
}

export default LikeButton;
