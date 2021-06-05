import styled, { ThemeProps, css } from "styled-components";
import { ITheme } from "../../core-ui/models";

const Container = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return `
    > .policy-card {
      margin-top: ${theme.common.spacing.small}px;
    }
`;
});

const Heading = styled.h2((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    ${theme.fontTypes.h4}
  `;
});

export { Container, Heading };
