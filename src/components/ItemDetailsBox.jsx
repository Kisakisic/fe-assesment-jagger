import { Box, Typography } from "@mui/material";
import React from "react";

function ItemDetailsBox({ title, children }) {
  return (
    <Box sx={{ bgcolor: "white", p: "24px" }}>
      <Typography
        variant="h6"
        sx={{ pb: "12px", mb: "12px", borderBottom: "2px solid #efefef" }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default ItemDetailsBox;
