import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useArticle } from "../contexts/ArticleContext";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

function AppLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { setArticle } = useArticle();
  const { setCart } = useCart();
  const { setUser } = useUser();

  useEffect(() => {
    async function getData() {
      const response = await fetch("data.json");
      const data = await response.json();
      if (data) {
        setArticle(data.article);
        setCart(data.cart);
        setUser(data.user);
        setIsLoading(false);
      } else {
        setError("Data not found.");
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (isLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress sx={{ m: "0px auto", mt: "50vh" }} />
      </Box>
    );

  if (error)
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h3" sx={{ m: "0px auto" }}>
          {error}
        </Typography>
      </Box>
    );

  return <div>{children}</div>;
}

export default AppLayout;
