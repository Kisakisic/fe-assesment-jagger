import { Chip, Link, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useArticle } from "../contexts/ArticleContext";
import SvgIcon from "./SvgIcon";

function ItemDetails() {
  const { article } = useArticle();

  const { features, attachments, keywords } = article;
  return (
    <>
      <Typography variant="body2">Features</Typography>
      <List sx={{ listStyleType: "disc", pl: "17px" }}>
        {Object.entries(features).map(([key, value]) => (
          <ListItem key={key} sx={{ display: "list-item" }}>
            <Typography
              variant="body2"
              sx={{ color: "#424242" }}
              display={"inline"}
            >
              {key}:
            </Typography>
            <Typography variant="body2" display={"inline"}>
              {" "}
              {value}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Typography variant="body2">Attachments</Typography>
      <List>
        {attachments.map((a) => (
          <ListItem key={a.file_label}>
            <Typography variant="body2" sx={{ display: "flex", gap: "8px" }}>
              <SvgIcon iconName={"attachment"} height="15px" width="15px" />
              <Link href={a.file_link} color={"secondary"} underline="none">
                {a.file_label}
              </Link>
            </Typography>
          </ListItem>
        ))}
      </List>

      <Typography variant="body2">Keywords</Typography>
      <Box sx={{ pt: "8px" }}>
        {keywords.map((k) => (
          <Chip
            key={k}
            label={k}
            sx={{
              mr: "12px",
              textTransform: "uppercase",
              color: "white",
              fontWeight: "bold",
              bgcolor: "#ced4db",
            }}
          />
        ))}
      </Box>
    </>
  );
}

export default ItemDetails;
