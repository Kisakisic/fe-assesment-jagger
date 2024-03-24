import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import { formatCurrency } from "../utils/helpers";
import PriceBreaks from "./PriceBreaks";
import { useArticle } from "../contexts/ArticleContext";

function ItemPricingAndShipping() {
  const { article } = useArticle();

  const {
    minimum_order_quantity,
    transport_costs,
    delivery_time,
    unit,
    currency,
  } = article;
  return (
    <>
      <List sx={{ listStyleType: "disc", pl: "17px", mb: "32px" }}>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body2" display={"inline"}>
            Minimum order:
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#424242" }}
            display={"inline"}
          >
            {minimum_order_quantity} {unit}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body2" display={"inline"}>
            Shipping:{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#424242" }}
            display={"inline"}
          >
            {formatCurrency(transport_costs, currency)}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body2" display={"inline"}>
            Delivery:{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#424242" }}
            display={"inline"}
          >
            {delivery_time} days
          </Typography>
        </ListItem>
      </List>

      <PriceBreaks />
    </>
  );
}

export default ItemPricingAndShipping;
