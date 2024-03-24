import React from "react";
import { styled } from "@mui/material/styles";

import { useArticle } from "../contexts/ArticleContext";
import SvgIcon from "./SvgIcon";

function ItemGalleryList() {
  const { article } = useArticle();

  return (
    <StyledList>
      {article.images.map((image) => (
        <StyledListElement key={image} sx={{}}>
          <SvgIcon
            iconName={"package"}
            fill={"#ccc"}
            width="50px"
            height="50px"
          />
        </StyledListElement>
      ))}
    </StyledList>
  );
}

export default ItemGalleryList;

const StyledList = styled("ul")`
  width: 130px;
  padding-right: 18px;
  list-style: none;

  li {
    margin-bottom: 15px;
    border: 2px solid #efefef;
  }
`;

const StyledListElement = styled("li")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
`;
