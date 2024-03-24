import React from "react";
import { styled } from "@mui/material/styles";

import SvgIcon from "./SvgIcon";
import { Box } from "@mui/system";

function ItemImage() {
  return (
    <Box
      sx={{
        border: "2px solid #efefef",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgIcon
        iconName={"package"}
        fill={"#ccc"}
        height="300px"
        width="300px"
      />
      <ZoomWrapper>
        <SvgIcon iconName={"zoom-in"} fill={"grey"} />
      </ZoomWrapper>
    </Box>
  );
}

export default ItemImage;

const ZoomWrapper = styled("div")`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 30px;
  width: 30px;
`;
