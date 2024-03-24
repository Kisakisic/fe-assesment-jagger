import React from "react";
import ItemGallery from "./ItemGallery";
import ItemInfo from "./ItemInfo";
import { Container } from "@mui/material";

const ItemView = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "700px",
        gap: "24px",
        mb: "40px",
      }}
    >
      <ItemGallery />
      <ItemInfo />
    </Container>
  );
};

export default ItemView;
