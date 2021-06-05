import * as React from "react";
import { withTheme } from "styled-components";
import { Container } from "./styledComponent";
import { ITheme } from "../../models";

export interface IProps {
  direction: "down" | "right";
  size: "xlarge";
  theme: ITheme;
  backgroundColor: string;
}
const ChevronInCircle = (props: IProps) => {
  const { direction, size: sizeProp, theme, backgroundColor } = props;
  const size = theme.common.spacing[sizeProp];

  let d;
  if (direction === "right") {
    d = `M22 29L27 24L22 19`;
  } else {
    // down
    d = "M19 22L24 27L29 22";
  }

  return (
    <Container className="chevron-in-circle">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="23"
          stroke="#FFD200"
          fill={backgroundColor}
          strokeWidth="2"
        />
        <path
          d={d}
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Container>
  );
};

export default withTheme(ChevronInCircle);
