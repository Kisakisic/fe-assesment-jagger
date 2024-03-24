import React from "react";
import { useArticle } from "../contexts/ArticleContext";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import StarRating from "./StarRating";
import { formatCurrency } from "../utils/helpers";
import SvgIcon from "./SvgIcon";
import AddToCart from "./AddToCart";

function ItemInfo() {
  const { article } = useArticle();

  const {
    title,
    supplier_link,
    supplier_name,
    price,
    currency,
    transport_costs,
  } = article;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2">
        by
        <Link href={`${supplier_link}`} color={"secondary"} underline="none">
          {" "}
          {supplier_name}
        </Link>
      </Typography>

      <StarRating />

      <Box sx={{ display: "flex", lineHeight: 2.1 }}>
        <Typography variant="subtitle1" sx={{ pr: "5px" }}>
          {formatCurrency(price, currency)}
        </Typography>
        <Typography
          variant="body2"
          sx={{ lineHeight: 2, fontWeight: 600, pr: "5px" }}
        >
          + {formatCurrency(transport_costs, currency)} shipping
        </Typography>
        <SvgIcon iconName={"discount"} height="20px" width="20px" />
      </Box>

      <AddToCart />
    </Box>
  );
}

export default ItemInfo;
