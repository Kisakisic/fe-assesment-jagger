import React, { useState } from "react";
import { useArticle } from "../contexts/ArticleContext";
import SvgIcon from "./SvgIcon";
import { Box, List, ListItem, Popper, Typography, styled } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useUser } from "../contexts/UserContext";

function StarRating() {
  const { article, setArticle } = useArticle();
  const { user, setUser } = useUser();

  const [isRated, setIsRated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOpenPopper(event) {
    if (isRated) return;
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? "rate_article_popper" : undefined;

  function handleRateArticle(value) {
    setArticle({ ...article, stars: (article.stars + value) / 2 });
    setIsRated(true);
    setAnchorEl(null);
  }
  window.w = article;
  window.u = user;
  const stars = Math.floor(article.stars);

  return (
    <Box sx={{ p: "15px 0px", display: "flex" }}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i + 1 <= stars) {
          return (
            <SvgIcon
              iconName={"star-filled"}
              key={i}
              height={"40px"}
              width={"40px"}
              fill={"#f59c1a"}
            />
          );
        } else {
          return (
            <SvgIcon
              iconName={"star-filled"}
              key={i}
              height={"40px"}
              width={"40px"}
              fill={"#dddddd"}
            />
          );
        }
      })}
      <Box>
        <ArrowDropDown
          sx={{
            pt: "5px",
            height: "100%",
            cursor: isRated ? "not-allowed" : "pointer",
          }}
          onClick={handleOpenPopper}
        />
        <Popper id={id} open={open} anchorEl={anchorEl} disa>
          <Box
            sx={{ border: "2px solid #ccc", p: 1, bgcolor: "background.paper" }}
          >
            <List>
              <StyledListItem>
                <Typography variant="body1">Rate this article</Typography>
              </StyledListItem>
              {Array.from({ length: 5 }, (_, i) => {
                return (
                  <StyledListItem
                    key={`starRating${i + 1}`}
                    onClick={() => handleRateArticle(i + 1)}
                  >
                    {i + 1}
                  </StyledListItem>
                );
              })}
            </List>
          </Box>
        </Popper>
      </Box>
    </Box>
  );
}

export default StarRating;

const StyledListItem = styled(ListItem)`
  text-align: right;
  padding: 5px 0px;
  justify-content: flex-end;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
  &:first-child {
    background-color: white;
    cursor: default;
  }
  &:last-child {
    border: none;
  }
`;
