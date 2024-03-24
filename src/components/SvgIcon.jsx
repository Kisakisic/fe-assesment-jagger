import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

function SvgIcon({
  iconName,
  height = "100%",
  width = "100%",
  fill,
  style,
  className,
  onClick,
}) {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconName) {
      import(`../../resources/icons/${iconName}.svg`)
        .then((icon) => {
          setIcon(icon.default);
        })
        .catch((error) => console.log(error));
    }
  }, [iconName]);
  return (
    <SvgIconStyle
      height={height}
      width={width}
      fill={fill}
      style={style}
      className={className}
      onClick={onClick}
    >
      {icon ? icon : null}
    </SvgIconStyle>
  );
}

export default SvgIcon;

const SvgIconStyle = styled("span")`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  path {
    fill: ${({ fill }) => fill};
    stroke: ${({ stroke }) => stroke};
  }

  svg {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
  }
`;
