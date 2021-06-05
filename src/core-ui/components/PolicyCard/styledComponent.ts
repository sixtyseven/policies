import styled, { css, ThemeProps } from "styled-components";
import { ITheme } from "../../models";

const Container = styled.div(
  (props: ThemeProps<ITheme> & { isActive: boolean }) => {
    const { theme, isActive } = props;
    return `
      border-radius: 3px;
      padding: ${theme.common.spacing.small}px;
      background-color: ${theme.backgroundColor.secondary};
      box-shadow: ${isActive ? theme.boxShadow : "none"};
      display: flex;
      flex-wrap: wrap;
  `;
  }
);

const Title = styled.h2((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    ${theme.fontTypes.h4}
    text-transform: none;
    flex: 1 1 100%;
    margin-bottom: ${theme.common.spacing.xxsmall}px;
  `;
});

const chevronComponentCss = css`
  display: none;
`;

export { Container, Title, chevronComponentCss };
