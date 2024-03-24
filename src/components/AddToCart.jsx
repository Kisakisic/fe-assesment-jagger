import React, { useState } from "react";
import { useArticle } from "../contexts/ArticleContext";
import { Box, Button, TextField, Typography } from "@mui/material";
import SvgIcon from "./SvgIcon";
import { useCart } from "../contexts/CartContext";

function AddToCart() {
  const { article } = useArticle();
  const { cart, setCart } = useCart();

  const [itemCount, setItemCount] = useState(1);

  const { unit } = article;

  function handleAddToCart() {
    const animeElements = document.getElementsByClassName("growElement");

    Array.from(animeElements).forEach((element) => {
      element.classList.add("grow");
      element.addEventListener("animationend", () => {
        element.classList.remove("grow");
      });
    });

    setCart(() => {
      console.log({
        ...cart,
        items: cart.items + Number(itemCount),
        total_costs: cart.total_costs + article.price * Number(itemCount),
      });
      return {
        ...cart,
        items: cart.items + Number(itemCount),
        total_costs: cart.total_costs + article.price * Number(itemCount),
      };
    });
  }

  return (
    <Box sx={{ mt: "auto", display: "flex", gap: "5px" }}>
      <TextField
        type="text"
        value={itemCount}
        variant="outlined"
        size="small"
        sx={{ width: "60px" }}
        inputProps={{ style: { textAlign: "right" } }}
        onChange={(e) => {
          setItemCount(e.target.value);
        }}
      />
      <Typography variant="body1" sx={{ lineHeight: 2.5 }}>
        {" "}
        {unit}
      </Typography>
      <Button
        variant="contained"
        sx={{ ml: "10px " }}
        disabled={isNaN(itemCount) || itemCount === "0"}
        onClick={handleAddToCart}
      >
        <SvgIcon iconName={"add"} height="30px" width="30px" fill={"white"} />{" "}
        <Typography variant="button" sx={{ pl: "5px" }}>
          Add to cart
        </Typography>
      </Button>
    </Box>
  );
}

export default AddToCart;
