import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { useArticle } from "../contexts/ArticleContext";
import AddToCart from "./AddToCart";
import SvgIcon from "./SvgIcon";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { keyframes } from "@mui/system";

const growKeyframe = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }

`;

function Menu({ fixed, setFixed }) {
  const { article } = useArticle();
  const { cart } = useCart();
  const { user, setUser } = useUser();
  const [showAddToCart, setShowAddToCart] = useState(false);
  const isFavoriteArticle = user.favorite_articles.includes(article.id);

  window.addEventListener("scroll", function (e) {
    if (window.scrollY > 50) {
      setFixed(true);

      if (this.window.scrollY > 750) {
        setShowAddToCart(true);
      } else {
        setShowAddToCart(false);
      }
    } else {
      setFixed(false);
    }
  });

  function handleFavorites() {
    if (isFavoriteArticle) {
      setUser({
        ...user,
        favorite_articles: user.favorite_articles.filter(
          (fa) => fa !== article.id
        ),
      });
    }

    if (!isFavoriteArticle) {
      setUser({
        ...user,
        favorite_articles: [...user.favorite_articles, article.id],
      });
    }
  }

  return (
    <Box
      sx={{
        borderBottom: fixed ? "none" : "2px solid #efefef",
        bgcolor: "white",
        height: "70px",
        display: "flex",
        alignItems: "center",
        position: fixed ? "fixed" : "relative",
        boxShadow: fixed ? " 0 2px 4px 0 rgba(0,0,0,.2)" : "unset",
        width: "100%",
        top: 0,
        pl: "24px",
        zIndex: 1,
      }}
    >
      <Typography variant="h5" sx={{ color: "#dd5348", mr: "auto" }}>
        {article.title}
      </Typography>
      <Box>
        {showAddToCart ? (
          <Box sx={{ mr: "40px" }}>
            <AddToCart />
          </Box>
        ) : null}
      </Box>
      <Box
        sx={{
          width: "70px",
          height: "100%",
          display: "flex",
          gap: "18px",
          mr: "18px",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          <SvgIcon
            iconName={isFavoriteArticle ? "favorite-filled" : "favorite"}
            fill={isFavoriteArticle ? "#dd5348" : "#ccc"}
            onClick={handleFavorites}
          />
        </Box>
        <Box>
          <SvgIcon iconName={"facts-soft"} fill={"#ccc"} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "70px",
          height: "100%",
          borderLeft: "2px solid #efefef",
          padding: "20px",
        }}
      >
        <StyledSpan
          className="growElement"
          sx={{ "&.grow": { animation: `${growKeyframe} 1s 0.15s ease 1` } }}
        >
          {cart.items}
        </StyledSpan>
        <StyledSvgIcon
          sx={{ "&.grow": { animation: `${growKeyframe} 1s ease 1` } }}
          className="growElement"
          iconName={"cart"}
          fill={"#ccc"}
          height="30px"
          width="30px"
          style={{
            "&.grow": {
              animation: `${growKeyframe} 1s ease 1`,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Menu;

const StyledSvgIcon = styled(SvgIcon)``;

const StyledSpan = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #dd5348;
  color: white;
  height: 18px;
  width: 18px;
  text-align: center;
  font-size: 12px;
  position: absolute;
  right: 15px;
  z-index: 1;
`;
