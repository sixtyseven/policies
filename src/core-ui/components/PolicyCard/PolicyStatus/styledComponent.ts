import styled, { css, ThemeProps } from "styled-components";
import { ITheme } from "../../../models";
import { InfoBlock } from "../styledComponent";

const Container = styled(InfoBlock)`
  ${(props: ThemeProps<ITheme>) => {
    const { theme } = props;
    return css`
      max-width: 220px;
      > .info {
        display: flex;
      }

      > .label {
        display: flex;
        align-items: center;

        position: relative;
        > .date-label {
          ${theme.fontTypes.caption5}
        }

        > .status {
          ${theme.fontTypes.state4}
          position: absolute;
          right: 16px;
          ${theme.common.isIE11 ? `
            top: -6px;
          `: ``} 
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
