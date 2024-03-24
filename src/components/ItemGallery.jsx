import React from "react";

import ItemGalleryList from "./ItemGalleryList";
import ItemImage from "./ItemImage";
import { Box } from "@mui/material";

function ItemGallery() {
  return (
    <Box
      sx={{
        width: { xs: "500px", md: "800px" },
        display: "flex",
      }}
    >
      <ItemGalleryList />
      <ItemImage />
    </Box>
  );
}

export default ItemGallery;
