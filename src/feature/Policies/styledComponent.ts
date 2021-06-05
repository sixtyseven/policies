import styled, { ThemeProps } from "styled-components";
import { ITheme } from "../../core-ui/models";

const Container = styled.div`
  ${(props: ThemeProps<ITheme>) => {
    const { theme } = props;
    return `
      > .policy-card {
        margin-top: ${theme.common.spacing.small}px;
      }
  `;
  }}
`;

export { Container };
