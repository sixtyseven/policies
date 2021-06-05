import { createGlobalStyle, ThemeProps } from "styled-components";
import { ITheme } from "../models";
import { fontFamily } from "./typography";

const GlobalStyle = createGlobalStyle`
  ${(props: ThemeProps<ITheme>) => {
    const { theme } = props;
    return `
      body {
        /* primary font */
        font-family: ${theme.fontFamily.primary};
        background-color: ${theme.backgroundColor.primary};
        padding: 16px;
      }

      .tk-brandon-grotesque {
        font-family: ${fontFamily.brandon} !important;
      }

      .tk-bitter {
        font-family: ${fontFamily.bitter} !important;
      }

      .tk-fira-mono {
        font-family: ${fontFamily.fira} !important;
      }

      h2, .h2 {
          font-size: 20px;
          line-height: 30px;
          text-transform: uppercase;
          font-family: ${theme.fontFamily.primary};
          color: ${theme.color.primary};
      }


  `;
  }}
`;

export { GlobalStyle };
