import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useArticle } from "../contexts/ArticleContext";
import ItemDetailsBox from "./ItemDetailsBox";
import ItemDetails from "./ItemDetails";
import ItemPricingAndShipping from "./ItemPricingAndShipping";

function ItemDescription() {
  const { article } = useArticle();

  const { description_long } = article;

  return (
    <Container sx={{ bgcolor: "#efefef", p: "2.6em 0px", height: "1000px" }}>
      <Box sx={{ maxWidth: "1200px" }}>
        <Box sx={{ mb: "24px" }}>
          <Typography variant="h6" sx={{ mb: "24px" }}>
            Description
          </Typography>
          <Typography variant="body1">{description_long}</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "24px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <ItemDetailsBox title={"Details"}>
              <ItemDetails />
            </ItemDetailsBox>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <ItemDetailsBox title={"Pricing & shipment"}>
              <ItemPricingAndShipping />
            </ItemDetailsBox>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ItemDescription;
