import styled, { css, ThemeProps } from "styled-components";
import { ITheme } from "../../../models";

const Container = styled.div`
  ${(props: ThemeProps<ITheme>) => {
    const { theme } = props;
    return css`
      display: flex;
      flex-direction: column;
      max-width: 210px;
      > .dates {
        ${theme.fontTypes.p1}
        display: flex;
      }
      > .description {
        display: flex;
        justify-content: space-between;
        > .date-label {
          ${theme.fontTypes.caption5}
          margin-top:  ${theme.common.spacing.xxsmall}px;
        }

        > .status {
          ${theme.fontTypes.state4}
          &.active {
            color: ${theme.color.success};
            > svg circle {
              fill: ${theme.color.success};
            }
          }
          &.expired {
            color: ${theme.color.error};
            > svg circle {
              fill: ${theme.color.error};
            }
          }
        }
      }
    `;
  }}
`;

export { Container };
